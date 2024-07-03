"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";
import Buttongroup from "../components/buttongroup";
import Display from "../components/display";
import { get } from "http";
import { error } from "console";

export default function Page() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(""); // [token, setToken
  const [username, setUsername] = useState("");
  const [type, setType] = useState("");
  const [range, setRange] = useState("");
  const [tracks, setTracks] = useState({ all: [], six: [], last: [] }); // [track1, track2, track3, ...
  const [artists, setArtists] = useState({ all: [], six: [], last: [] }); // [track1, track2, track3, ...
  const [recents, setRecents] = useState([]); // [track1, track2, track3, ...
  const [id, setId] = useState(""); // [id, setId
  const ranges: any = {
    all: "All Time",
    six: "Last 6 Months",
    last: "Last Month",
  };

  function getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g;
    var q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      //@ts-expect-error
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  function getUserInfo(token: string) {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsername(response.data.display_name);
        setId(response.data.id)
      })
      .catch((error) => console.log(error));
  }

  const typeSet = (type: string) => {
    setType(type);
  };

  const rangeSet = (range: string) => {
    console.log(range);
    setRange(range);
  };

  const getTracks = (data: any, type: any, token: string) => {
    let trackInfo: any = tracks;
    axios
      .get("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 50,
          time_range: data,
        },
      })
      .then((response) => {
        for (let i = 0; i < 50; i++) {
          trackInfo[type].push({
            uri: response.data["items"][i]["uri"],
            url: response.data["items"][i]["album"]["images"][2]["url"],
            name: response.data["items"][i]["name"],
            artist: response.data["items"][i]["artists"][0]["name"],
          });
        }
        setTracks(trackInfo);
      })
      .catch((error) => console.log(error));
  };

  const getArtists = (data: any, type: any, token: string) => {
    let artistInfo: any = artists;
    axios
      .get("https://api.spotify.com/v1/me/top/artists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 50,
          time_range: data,
        },
      })
      .then((response) => {
        for (let i = 0; i < 50; i++) {
          artistInfo[type].push({
            uri: response.data["items"][i]["uri"],
            url: response.data["items"][i]["images"][2]["url"],
            name: response.data["items"][i]["name"],
            artist: "",
          });
        }
        setArtists(artistInfo);
      })
      .catch((error) => console.log(error));
  };

  const getRecents = (token: any) => {
    let recentInfo = recents;
    axios
      .get("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 50,
        },
      })
      .then((response) => {
        for (let i = 0; i < 50; i++) {
          //@ts-ignore
          recentInfo.push({
            uri: response.data["items"][i]["track"]["uri"],
            url: response.data["items"][i]["track"]["album"]["images"][2][
              "url"
            ],
            name: response.data["items"][i]["track"]["name"],
            artist: response.data["items"][i]["track"]["artists"][0]["name"],
          });
        }
        setRecents(recentInfo);
      })
      .catch((error) => console.log(error));
  };

  const createPlaylist = () => {
    axios
      .post("https://api.spotify.com/v1/users/" + id + "/playlists", {
        name: "Top 50 " + type + " " + (type !== "recents" ? ranges[range] : ""),
        description: "exported from tunestats",
      }, {
        headers: {
          "Authorization": `Bearer ${token}`,    
        },
  })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    //@ts-expect-error
    const access_token = getHashParams().access_token;
    if (access_token) {
      getUserInfo(access_token);
      setType("tracks");
      setRange("all");
      setAuth(true);
      getTracks("long_term", "all", access_token);
      getTracks("medium_term", "six", access_token);
      getTracks("short_term", "last", access_token);
      getArtists("long_term", "all", access_token);
      getArtists("medium_term", "six", access_token);
      getArtists("short_term", "last", access_token);
      getRecents(access_token);
      setToken(access_token);
    } else {
      setAuth(false);
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <Header click={typeSet} />
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-4xl">
            {username}&apos;s Top 50 {type}{" "}
            {type !== "recents" ? "(" + ranges[range] + ")" : ""}{" "}
          </p>
          <br />
          {type !== "recents" && <Buttongroup click={rangeSet} />}
          <br />
          <br />
          <button className="btn btn-neutral" onClick={() => createPlaylist()}>Create Playlist</button>
        </div>
        {type === "tracks" && range === "all" && (
          <Display data={tracks["all"]} />
        )}
        {type === "tracks" && range === "last" && (
          <Display data={tracks["last"]} />
        )}
        {type === "tracks" && range === "six" && (
          <Display data={tracks["six"]} />
        )}
        {type === "artists" && range === "all" && (
          <Display data={artists["all"]} />
        )}
        {type === "artists" && range === "last" && (
          <Display data={artists["last"]} />
        )}
        {type === "artists" && range === "six" && (
          <Display data={artists["six"]} />
        )}
        {type === "recents" && <Display data={recents} />}
      </div>
    </div>
  );
}
