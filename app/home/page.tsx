"use client";

import { useEffect, useState } from "react";
import Recents from "../components/recents";
import Loading from "../components/loading";
import Search from "../components/search";
import { getFriends, getRecentTracks } from "../api/lib/lastfm/user";
import { getCookies } from "../api/lib/lastfm/auth";
import { comparePath } from "../api/lib/paths";
import Settings from "../components/settings";
import Friends from "../components/friends";

export default function Page() {
  const [recentTracks, setRecentTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState("");
  const [active, setActive] = useState("");
  const [friends, setFriends] = useState<any[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      setActive(comparePath());
    };
    window.addEventListener("hashchange", handleHashChange, false);

    const cookieList = getCookies("nextjs");
    if (cookieList != undefined) {
      setUsername(cookieList[1] || "");
      //@ts-expect-error
      getRecentTracks(cookieList[1] || "", process.env.NEXT_PUBLIC_API_KEY)
        .then((response: any) => {
          setRecentTracks(response.data.recenttracks.track);
          setLoading(false);
          setActive(comparePath());
        })
        .catch((error: any) => {
          console.log(error);
        });
      return () =>
        window.removeEventListener("hashchange", handleHashChange, false);
    } else {
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    }
  }, []);

  useEffect(() => {
    if (active.includes("friends") && friends.length === 0) {
      getFriends(username, process.env.NEXT_PUBLIC_API_KEY || "", 50, 1).then(
        (response: any) => {
          setFriends(response.user);
          console.log(response);
        },
      );
    }
  }, [active]);

  return (
    <div className="container mx-auto">
      {loading && <Loading />}
      {active.includes("overview") && active === "overview/recents" && (
        <Recents recentTracks={recentTracks} />
      )}
      {active.includes("friends") && <Friends data={friends} />}
      {active.includes("search") && <Search active={active} />}
      {active.includes("tools") && active === "tools/settings" && <Settings />}
    </div>
  );
}
