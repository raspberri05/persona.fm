"use client";

import { useEffect, useState } from "react";
import { comparePath } from "../api/lib/paths";

export default function Tabs() {
  const [active, setActive] = useState("");

  function switchTab(tab: string) {
    window.location.hash = `#${tab}`;
    setActive(comparePath());
    const elem = document.activeElement as HTMLInputElement;
    if (elem) {
      elem.blur();
    }
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-music-note-list"
            viewBox="0 0 16 16"
          >
            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
            <path fillRule="evenodd" d="M12 3v10h-1V3z" />
            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
            <path
              fillRule="evenodd"
              d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("friends") ? "tab-active" : ""}`}
          onClick={() => switchTab("friends")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("search") ? "tab-active" : ""}`}
          onClick={() => switchTab("search/tracks")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("scrobble") ? "tab-active" : ""}`}
          onClick={() => switchTab("scrobble/manual")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-music-player-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>{" "}
        </a>
        <a
          role="tab"
          className={`tab hover:tab-active ${active.includes("tools") ? "tab-active" : ""}`}
          onClick={() => switchTab("tools/settings")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-tools"
            viewBox="0 0 16 16"
          >
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
          </svg>
        </a>
      </div>
      {(active.includes("overview") ||
        active.includes("search") ||
        active.includes("scrobble") ||
        active.includes("tools")) && <br />}
      {active.includes("overview") && (
        <div role="tablist" className="tabs tabs-bordered tabs-sm">
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
            onClick={() => switchTab("overview/tracks/7day")}
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
        <div role="tablist" className="tabs tabs-bordered tabs-sm">
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
        <div role="tablist" className="tabs tabs-bordered tabs-sm">
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
        <div role="tablist" className="tabs tabs-bordered tabs-sm">
          <a
            role="tab"
            className={`tab hover:tab-active ${active.includes("tools/settings") ? "tab-active" : ""}`}
            onClick={() => switchTab("tools/settings")}
          >
            Settings
          </a>
        </div>
      )}

      {active.includes("overview/tracks/") && (
        <div className="dropdown dropdown-hover">
          <br />
          <div tabIndex={0} role="button" className="btn btn-primary m-1">
            {active.split("tracks/")[1]}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
          <ul className="dropdown-content menu bg-primary z-[1] w-206 p-2 shadow">
            <li>
              <a
                onClick={() => switchTab("overview/tracks/7day")}
                role="menuitem"
              >
                7 days
              </a>
            </li>
            <li>
              <a
                onClick={() => switchTab("overview/tracks/1month")}
                role="menuitem"
              >
                1 month
              </a>
            </li>
            <li>
              <a
                onClick={() => switchTab("overview/tracks/3month")}
                role="menuitem"
              >
                3 months
              </a>
            </li>
            <li>
              <a
                onClick={() => switchTab("overview/tracks/6month")}
                role="menuitem"
              >
                6 months
              </a>
            </li>
            <li>
              <a
                onClick={() => switchTab("overview/tracks/12month")}
                role="menuitem"
              >
                12 months
              </a>
            </li>
            <li>
              <a
                onClick={() => switchTab("overview/tracks/overall")}
                role="menuitem"
              >
                overall
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
