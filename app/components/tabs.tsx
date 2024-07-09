"use client";

import { useEffect, useState } from "react";
import { comparePath } from "../api/lib/paths";

export default function Tabs() {
  const [active, setActive] = useState("");

  function switchTab(tab: string) {
    window.location.hash = `#${tab}`;
    setActive(comparePath());
  }

  useEffect(() => {
    if (window.location.hash === "") {
      window.location.hash = "#overview/recents";
    }
    if (window.location.hash === "#overview") {
      window.location.hash = "#overview/recents";
    }
    if (window.location.hash === "#search") {
      window.location.hash = "#search/tracks";
    }
    setActive(comparePath());
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#1f1f1f",
        width: "100%",
      }}
    >
      <br />
      <div role="tablist" className="tabs tabs-boxed bg-neutral">
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("overview") ? "tab-active" : ""}`}
          onClick={() => switchTab("overview/recents")}
        >
          Overview
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("social") ? "tab-active" : ""}`}
          onClick={() => switchTab("social/followers")}
        >
          Social
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("search") ? "tab-active" : ""}`}
          onClick={() => switchTab("search/tracks")}
        >
          Search
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("scrobble") ? "tab-active" : ""}`}
          onClick={() => switchTab("scrobble/manual")}
        >
          Scrobble
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("tools") ? "tab-active" : ""}`}
          onClick={() => switchTab("tools/settings")}
        >
          Tools
        </a>
      </div>
      <br />
      {active.includes("overview") && (
        <div role="tablist" className="tabs tabs-bordered">
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("overview/recents") ? "tab-active" : ""}`}
            onClick={() => switchTab("overview/recents")}
          >
            Recents
          </a>
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("overview/tracks") ? "tab-active" : ""}`}
            onClick={() => switchTab("overview/tracks")}
          >
            Tracks
          </a>
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("overview/artists") ? "tab-active" : ""}`}
            onClick={() => switchTab("overview/artists")}
          >
            Artists
          </a>
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("overview/albums") ? "tab-active" : ""}`}
            onClick={() => switchTab("overview/albums")}
          >
            Albums
          </a>
        </div>
      )}
      {active.includes("social") && (
        <div role="tablist" className="tabs tabs-bordered">
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("social/followers") ? "tab-active" : ""}`}
            onClick={() => switchTab("social/followers")}
          >
            Recents
          </a>
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("social/following") ? "tab-active" : ""}`}
            onClick={() => switchTab("social/following")}
          >
            Tracks
          </a>
        </div>
      )}
      {active.includes("search") && (
        <div role="tablist" className="tabs tabs-bordered">
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("search/tracks") ? "tab-active" : ""}`}
            onClick={() => switchTab("search/tracks")}
          >
            Tracks
          </a>
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("search/artists") ? "tab-active" : ""}`}
            onClick={() => switchTab("search/artists")}
          >
            Artists
          </a>
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("search/albums") ? "tab-active" : ""}`}
            onClick={() => switchTab("search/albums")}
          >
            Albums
          </a>
        </div>
      )}
      {active.includes("scrobble") && (
        <div role="tablist" className="tabs tabs-bordered">
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("scrobble/manual") ? "tab-active" : ""}`}
            onClick={() => switchTab("scrobble/manual")}
          >
            Manual
          </a>
        </div>
      )}
      {active.includes("tools") && (
        <div role="tablist" className="tabs tabs-bordered">
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("tools/settings") ? "tab-active" : ""}`}
            onClick={() => switchTab("tools/settings")}
          >
            Settings
          </a>
        </div>
      )}
    </div>
  );
}
