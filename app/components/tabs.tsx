export default function Tabs(props: any) {
  return (
    <div role="tablist" className="tabs tabs-boxed">
      <a
        role="tab"
        className={
          "tab " + (props.activeTab === "recent-tracks" ? "tab-active" : "")
        }
        onClick={() => props.switchTab("recent-tracks")}
      >
        Recent Tracks
      </a>
      <a
        role="tab"
        className={"tab " + (props.activeTab === "charts" ? "tab-active" : "")}
        onClick={() => props.switchTab("charts")}
      >
        Charts
      </a>
    </div>
  );
}
