"use client"

import { useEffect, useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState("")

  function comparePath() {
    const path = window.location.hash.split("#")[1]
    setActive(path)
  }

  function switchTab(tab:string) {
    window.location.hash = `#${tab}`
    comparePath()
  }



  useEffect(() => {
    comparePath();
  }, []); 
  
  return (
    <div className="container mx-auto">
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className={`tab hover:tab-active ${active === "overview" ? "tab-active" : ""}`} onClick={() => switchTab("overview")}>Overview</a>
        <a role="tab" className={`tab hover:tab-active ${active === "charts" ? "tab-active" : ""}`} onClick={() => switchTab("charts")}>Charts</a>
      </div>
    </div>

  );
}
