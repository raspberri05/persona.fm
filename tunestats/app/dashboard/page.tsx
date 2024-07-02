"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../components/header";
import Buttongroup from "../components/buttongroup";

export default function Page() {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [type, setType] = useState("artists");
  const [range, setRange] = useState("last month");

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
    axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setUsername(response.data.display_name);
    })
    .catch((error) => console.log(error));
  };

  const typeSet = (type: string) => {
    setType(type);
  }

  const rangeSet = (range: string) => {
    setRange(range);
  }

  useEffect(() => {
    //@ts-expect-error
    const access_token = getHashParams().access_token;
    if (access_token) {
      getUserInfo(access_token);
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <Header click={typeSet}/>
      <div className="container mx-auto text-center">
        <p className="text-4xl">{username}'s Top 50 {type} ({range})</p>
        <br />
        <Buttongroup click={rangeSet}/>
      </div>
    </div>
  );
}
