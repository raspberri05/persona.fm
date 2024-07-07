"use client";

import { useEffect, useState } from "react";
import Recents from "../components/recents";
import Loading from "../components/loading";
const { getCookies, getRecentTracks } = require("lastfm-api-node");

export default function Page() {
  const [recentTracks, setRecentTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [active, setActive] = useState("")

  function comparePath() {
    const path = window.location.hash.split("#")[1]
    setActive(path)
  }

  useEffect(() => {
    window.addEventListener("hashchange", comparePath, false);
    const cookieList = getCookies("nextjs");
    if (cookieList != undefined) {
      getRecentTracks(cookieList[1] || "", process.env.NEXT_PUBLIC_API_KEY)
        .then((response: any) => {
          setRecentTracks(response.data.recenttracks.track);
          setLoading(false);
          comparePath()
        })
        .catch((error: any) => {
          console.log(error);
        });
        return () => window.removeEventListener("hashchange", comparePath, false);
    } else {
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    }
  }, []);

  return (
    <div className="container mx-auto">
      {loading && <Loading />}
      {active === "overview" && <Recents recentTracks={recentTracks} />}
      {active === "charts" && <p>Charts</p>}
    </div>
  );
}
