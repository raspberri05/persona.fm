"use client"

export default function Buttongroup(props:any) {
  return (
    <div className="join">
      <button className="btn join-item btn-neutral" onClick={() => props.click("all time")}>All Time</button>
      <button className="btn join-item btn-neutral" onClick={() => props.click("last 6 months")}>Last 6 Months</button>
      <button className="btn join-item btn-neutral" onClick={() => props.click("last month")}>Last Month</button>
    </div>
  );
}
