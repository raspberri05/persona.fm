"use client";

import { useEffect, useState } from "react";
const { comparePath } = require("../paths");

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
    <div className="container mx-auto">
      <div role="tablist" className="tabs tabs-boxed">
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("overview") ? "tab-active" : ""}`}
          onClick={() => switchTab("overview/recents")}
        >
          Overview
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("charts") ? "tab-active" : ""}`}
          onClick={() => switchTab("charts/abc")}
        >
          Charts
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("search") ? "tab-active" : ""}`}
          onClick={() => switchTab("search/tracks")}
        >
          Search
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
    </div>
  );
}
