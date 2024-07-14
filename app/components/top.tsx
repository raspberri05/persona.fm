"use client";

import Image from "next/image";
import { TopTracks, Track } from "../api/lib/interfaces/track";

export default function Top(props: { data: TopTracks; active: string }) {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                <tbody>
                    {props.data[props.active.split("overview/tracks/")[1]].map(
                        (track: Track) => (
                            <tr
                                key={
                                    track.mbid + track.name + track.artist.name
                                }
                                className="hover:text-secondary cursor-pointer border-0"
                            >
                                <td
                                    style={{ width: "0" }}
                                    className="px-0 py-0"
                                >
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
                                    <p className="font-bold text-md">
                                        {track.name}
                                    </p>
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
