"use client";

import { useEffect, useState } from "react";
import Recents from "../components/recents";
import Loading from "../components/loading";
import Tabs from "../components/tabs";
const { getCookies, getRecentTracks } = require("lastfm-api-node");

export default function Page() {
  const [recentTracks, setRecentTracks] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("recent-tracks");
  const [loading, setLoading] = useState<boolean>(true);

  function switchTab(tab: string) {
    setActiveTab(tab);
  }

  useEffect(() => {
    const cookieList = getCookies("nextjs");
    if (cookieList != undefined) {
      getRecentTracks(cookieList[1] || "", process.env.NEXT_PUBLIC_API_KEY)
        .then((response: any) => {
          setRecentTracks(response.data.recenttracks.track);
          setLoading(false);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    }
  }, []);

  return (
    <div className="container mx-auto">
      <Tabs activeTab={activeTab} switchTab={switchTab} />
      <br />
      {loading && <Loading />}
      {activeTab === "recent-tracks" && <Recents recentTracks={recentTracks} />}
    </div>
  );
}
