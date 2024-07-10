"use client";

import { useEffect, useState } from "react";
import Recents from "../components/recents";
import Search from "../components/search";
import { getCookies } from "../api/lib/lastfm/auth";
import { comparePath } from "../api/lib/paths";
import Settings from "../components/settings";
import Friends from "../components/friends";
import Top from "../components/top";

export default function Page() {
  const [username, setUsername] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActive(comparePath());
    };
    window.addEventListener("hashchange", handleHashChange, false);

    const cookieList = getCookies("nextjs");
    if (cookieList === undefined) {
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    }
    setUsername(cookieList?.[1]);
    setActive(comparePath());
  }, []);

  return (
    <div>
      {active === "overview/recents" && <Recents username={username} />}
      {active.includes("overview/tracks/") && (
        <Top username={username} active={active} />
      )}
      {active === "friends" && <Friends username={username} active={active} />}
      {active.includes("search") && <Search active={active} />}
      {active === "tools/settings" && <Settings />}
    </div>
  );
}
