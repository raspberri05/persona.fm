"use client";

import { useEffect, useState } from "react";
import Recents from "../components/recents";
import Search from "../components/search";
import { getCookies } from "../api/lib/lastfm/auth";
import { comparePath } from "../api/lib/paths";
import Settings from "../components/settings";
import Friends from "../components/friends";
import Top from "../components/top";
import { getFriends, getRecentTracks } from "../api/lib/lastfm/user";

export default function Page() {
  const [username, setUsername] = useState("");
  const [active, setActive] = useState("");
  const [friends, setFriends] = useState([]);
  const [recents, setRecents] = useState([]);

  const handleHashChange = () => {
    setActive(comparePath());
  };

  function zeroLen(data: Array<unknown>, activeItem: string) {
    if (data.length === 0) {
      if (active === activeItem) {
        return true
      }
      return false;
    }
    return false;
  
  }

  useEffect(() => {
    const cookieList = getCookies("nextjs");
    if (cookieList === undefined) {
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    }
    window.addEventListener("hashchange", handleHashChange, false);
    const username_local = cookieList?.[1] || "";
    const api_key = process.env.NEXT_PUBLIC_API_KEY || "";
    const path = comparePath();
    setUsername(username);
    setActive(path);
    if (zeroLen(friends, "friends")) {
      console.log("fetching friends");
      getFriends(username_local, api_key, 50, 1).then((response) => {
        setFriends(response.user);
      });
    }
    if (zeroLen(recents, "overview/recents")) {
      console.log("fetching recents");
      getRecentTracks(username_local, api_key)
      .then((response) => {
        setRecents(response.data.recenttracks.track);
      })
    }
  }, [active]);

  return (
    <div>
      {active === "overview/recents" && <Recents data={recents} />}
      {active.includes("overview/tracks/") && (
        <Top username={username} active={active} />
      )}
      {active === "friends" && <Friends data={friends} />}
      {active.includes("search") && <Search active={active} />}
      {active === "tools/settings" && <Settings />}
    </div>
  );
}
