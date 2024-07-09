"use client";

import axios from "axios";
import Image from "next/image";
import { useDebugValue, useEffect, useState } from "react";

export default function Top(props: any) {
  const [images, setImages] = useState<any[]>([]);

  function getImage(title: string, artist: string) {
    return axios
      .get("https://ws.audioscrobbler.com/2.0/", {
        params: {
          method: `track.getInfo`,
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          format: "json",
          track: title,
          artist: artist,
        },
      })
      .then((response) => {
        return response.data.track.album.image[3]["#text"];
      })
      .catch((error) => {
        return "/images/image.png";
      });
  }

  // Step 1: Create a delay function
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Step 2: Modify the useEffect hook
  useEffect(() => {
    if (props.topTracks && props.topTracks.length > 0) {
      let delayTime = 0; // Initial delay time
      const imagePromises = props.topTracks.map(
        (track: { name: string; artist: { name: string } }) => {
          // Increase delayTime for each call to ensure staggered requests
          delayTime += 10; // Adjust the delay as needed
          return delay(delayTime).then(() =>
            getImage(track.name, track.artist.name),
          );
        },
      );

      Promise.all(imagePromises)
        .then((images) => {
          setImages(images);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
  }, [props.topTracks]); // Add props.topTracks as a dependency
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <tbody>
          {props.topTracks.map((track: any, index: any) => (
            <tr
              key={index}
              className="hover:text-secondary cursor-pointer border-0"
              //onClick={() => redirect(track.url)}
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
                        // onError={(e) => e.currentTarget.src = '/images/image.png'}
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
                  {track.playcount +
                    " " +
                    (track.playcount === "1" ? "play" : "plays")}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
