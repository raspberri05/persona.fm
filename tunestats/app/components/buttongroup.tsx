"use client"

export default function Buttongroup(props:any) {
  return (
    <div className="join">
      <button className="btn join-item btn-neutral" onClick={() => props.click("all")}>All Time</button>
      <button className="btn join-item btn-neutral" onClick={() => props.click("six")}>Last 6 Months</button>
      <button className="btn join-item btn-neutral" onClick={() => props.click("last")}>Last Month</button>
    </div>
  );
}
