"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getTopItems } from "../api/lib/lastfm/user";
import { TopTracks, Track } from "../api/lib/interfaces/track";
import { getImage } from "../api/lib/lastfm/info";

export default function Top(props: { username: string; active: string }) {
  const [topTracks, setTopTracks] = useState<TopTracks>({
    "7day": [],
    "1month": [],
    "3month": [],
    "6month": [],
    "12month": [],
    overall: [],
  });

  useEffect(() => {
    if (props.active.includes("overview/tracks/")) {
      const timePeriod = props.active.split("overview/tracks/")[1];
      if (topTracks[timePeriod]?.length === 0) {
        getTopItems(
          props.username,
          "tracks",
          timePeriod,
          50,
          1,
          process.env.NEXT_PUBLIC_API_KEY || "",
        )
          .then(async (response) => {
            const tracksWithImages = await Promise.all(
              response.track.map(
                async (track: {
                  name: string;
                  artist: { name: string };
                  image?: string;
                }) => {
                  const image = await getImage(track.name, track.artist.name);
                  return { ...track, image };
                },
              ),
            );

            setTopTracks((prevTracks: TopTracks) => ({
              ...prevTracks,
              [timePeriod]: tracksWithImages,
            }));
          })
          .catch((error) => {
            console.error("Error fetching top tracks:", error);
          });
      }
    }
  }, [props.active, topTracks]);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <tbody>
          {topTracks[props.active.split("overview/tracks/")[1]].map(
            (track: Track) => (
              <tr
                key={track.mbid + track.name + track.artist.name}
                className="hover:text-secondary cursor-pointer border-0"
              >
                <td style={{ width: "0" }} className="px-0 py-0">
                  <div className="avatar">
                    <div className="w-12">
                      {track.image ? (
                        <Image
                          unoptimized
                          alt="album cover"
                          src={track.image}
                          width={64}
                          height={64}
                          loading="lazy"
                        />
                      ) : (
                        <Image
                          unoptimized
                          alt="album cover"
                          src="/images/image.png"
                          width={64}
                          height={64}
                          loading="lazy"
                        />
                      )}
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-bold text-md">{track.name}</p>
                  <p>{track.artist.name}</p>
                </td>
                <td className="text-end px-0">
                  <p style={{ whiteSpace: "nowrap" }}>
                    {`${track.playcount} ${track.playcount === "1" ? "play" : "plays"}`}
                  </p>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
