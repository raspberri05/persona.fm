"use client";

import { useEffect, useState } from "react";
import Recents from "../components/recents";
import Search from "../components/search";
import { getCookie } from "cookies-next";
import { comparePath } from "../api/lib/paths";
import Settings from "../components/settings";
import Friends from "../components/friends";
import Top from "../components/top";
import {
  getFriends,
  getRecentTracks,
  getTopItems,
} from "../api/lib/lastfm/user";
import Scrobbler from "../components/scrobbler";
import { TopTracks } from "../api/lib/interfaces/track";
import { getImage } from "../api/lib/lastfm/info";

export default function Page() {
  const [username, setUsername] = useState("");
  const [active, setActive] = useState("");
  const [friends, setFriends] = useState([]);
  const [recents, setRecents] = useState([]);
  const [topTracks, setTopTracks] = useState<TopTracks>({
    "7day": [],
    "1month": [],
    "3month": [],
    "6month": [],
    "12month": [],
    overall: [],
  });

  const handleHashChange = () => {
    setActive(comparePath());
  };

  function zeroLen(data: Array<unknown>, activeItem: string) {
    return data.length === 0 && active === activeItem;
  }

  useEffect(() => {
    if (getCookie("username") === undefined) {
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    } else {
      const currUsername = getCookie("username");
      window.addEventListener("hashchange", handleHashChange, false);
      const username_local = currUsername || "";
      const api_key = process.env.NEXT_PUBLIC_API_KEY || "";
      const path = comparePath();
      setUsername(username_local);
      setActive(path);
      if (zeroLen(friends, "friends")) {
        console.log("fetching friends");
        getFriends(username_local, api_key, 50, 1).then((response) => {
          setFriends(response.user);
        });
      }
      if (zeroLen(recents, "overview/recents")) {
        console.log("fetching recents");
        getRecentTracks(username_local, api_key).then((response) => {
          setRecents(response.data.recenttracks.track);
        });
      }
      if (active.includes("overview/tracks/")) {
        const timePeriod = active.split("overview/tracks/")[1];
        if (topTracks[timePeriod]?.length === 0) {
          getTopItems(
            username,
            "tracks",
            timePeriod,
            50,
            1,
            process.env.NEXT_PUBLIC_API_KEY || "",
          )
            .then(async (response) => {
              const tracksWithImages = await Promise.all(
                response.track.map(
                  async (track: {
                    name: string;
                    artist: { name: string };
                    image?: string;
                  }) => {
                    const image = await getImage(track.name, track.artist.name);
                    return { ...track, image };
                  },
                ),
              );

              setTopTracks((prevTracks: TopTracks) => ({
                ...prevTracks,
                [timePeriod]: tracksWithImages,
              }));
            })
            .catch((error) => {
              console.error("Error fetching top tracks:", error);
            });
        }
      }
    }
  }, [active, topTracks]);

  return (
    <div>
      {active === "overview/recents" && <Recents data={recents} />}
      {active.includes("overview/tracks/") && (
        <Top data={topTracks} active={active} />
      )}
      {active === "friends" && <Friends data={friends} />}
      {active.includes("search") && <Search active={active} />}
      {active.includes("scrobble") && <Scrobbler />}
      {active === "tools/settings" && <Settings />}
    </div>
  );
}
