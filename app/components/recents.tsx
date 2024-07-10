"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getRecentTracks } from "../api/lib/lastfm/user";

export default function Recents(props: any) {
  const [recents, setRecents] = useState([]);

  function convertUTCDateToLocal(dateStr: string) {
    const [day, month, year, time] = dateStr.split(/[\s,]+/);
    const date = new Date(`${month} ${day}, ${year} ${time} UTC`);

    const localDateStr = date.toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const [datePart, timePart] = localDateStr.split(", ");

    return (
      <>
        {datePart}
        <br />
        {timePart}
      </>
    );
  }

  function nowPlaying() {
    const now = "Now";
    const playing = "Playing";
    return (
      <>
        {now}
        <br /> {playing}
      </>
    );
  }

  const redirect = (url: string) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    getRecentTracks(props.username, process.env.NEXT_PUBLIC_API_KEY || "")
      .then((response) => {
        setRecents(response.data.recenttracks.track);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <tbody>
          {recents.map((track: any, index: number) => (
            <tr
              key={index}
              className="hover:text-secondary cursor-pointer border-0"
              onClick={() => redirect(track.url)}
            >
              <td style={{ width: "0" }} className="px-0 py-0">
                <div className="avatar">
                  <div className="w-12">
                    <Image
                      alt="album cover"
                      src={track.image[3]["#text"]}
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
              </td>
              <td>
                <p className="font-bold text-md">{track.name}</p>
                <p>{track.artist["#text"]}</p>
              </td>
              <td className="text-end px-0">
                <p
                  className={
                    track?.["@attr"]?.["nowplaying"] ? "text-error" : ""
                  }
                >
                  {!track?.["@attr"]?.["nowplaying"]
                    ? convertUTCDateToLocal(track?.date?.["#text"])
                    : nowPlaying()}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
