"use client";

import { useEffect, useState } from "react";
import Recents from "../components/recents";
import Loading from "../components/loading";
import Search from "../components/search";
import { getRecentTracks } from "../api/lib/lastfm/user";
import { getCookies } from "../api/lib/lastfm/auth";
import { comparePath } from "../api/lib/paths";

export default function Page() {
  const [recentTracks, setRecentTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActive(comparePath());
    };
    window.addEventListener("hashchange", handleHashChange, false);

    const cookieList = getCookies("nextjs");
    if (cookieList != undefined) {
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

  return (
    <div className="container mx-auto">
      {loading && <Loading />}
      {active.includes("overview") && active === "overview/recents" && (
        <Recents recentTracks={recentTracks} />
      )}
      {active.includes("search") && <Search active={active} />}
    </div>
  );
}
