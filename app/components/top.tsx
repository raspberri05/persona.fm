"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTopItems } from "../api/lib/lastfm/user";
import { Track } from "../api/lib/interfaces/track";

export default function Top(props: any) {
  const [images, setImages] = useState<any[string]>([]);
  const [topTracks, setTopTracks] = useState<any>({
    "7day": [],
    "1month": [],
    "3month": [],
    "6month": [],
    "12month": [],
    overall: [],
  });

  function getImage(title: string, artist: string) {
    return axios
      .get("https://ws.audioscrobbler.com/2.0/", {
        params: {
          method: "track.getInfo",
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          format: "json",
          track: title,
          artist,
        },
      })
      .then((response) => {
        return response.data.track.album.image[3]["#text"];
      })
      .catch((_) => {
        return "/images/image.png";
      });
  }

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

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
        ).then((response) => {
          console.log(response);
          setTopTracks((prevTracks:object) => ({
            ...prevTracks,
            [timePeriod]: response.track,
          }));
        });
      }
    }
  }, [props.active]);

  useEffect(() => {
    if (
      topTracks[props.active.split("overview/tracks/")[1]] &&
      topTracks[props.active.split("overview/tracks/")[1]].length > 0
    ) {
      let delayTime = 0;
      const imagePromises = topTracks[
        props.active.split("overview/tracks/")[1]
      ].map((track: { name: string; artist: { name: string } }) => {
        delayTime += 10;
        return delay(delayTime).then(() =>
          getImage(track.name, track.artist.name),
        );
      });

      Promise.all(imagePromises)
        .then((images) => {
          setImages(images);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
  }, [topTracks]);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <tbody>
          {topTracks[props.active.split("overview/tracks/")[1]].map(
            (track: Track, index: number) => (
              <tr
                key={track.mbid + track.name + track.artist.name}
                className="hover:text-secondary cursor-pointer border-0"
              >
                <td style={{ width: "0" }} className="px-0 py-0">
                  <div className="avatar">
                    <div className="w-12">
                      {images.length !== 0 && images[index] ? (
                        <Image
                          unoptimized
                          alt="album cover"
                          src={images[index]}
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
