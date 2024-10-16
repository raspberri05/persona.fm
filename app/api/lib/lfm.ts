import { cookies } from "next/headers";
import axios from "axios";
import { config } from "dotenv";
import { Tag, Track, TrackInfo } from "@/utils/types";
config({ path: ".env" });

const key = process.env.LFM_API_KEY || "";

export async function getTracks() {
    const cookieStore = cookies();
    const username = cookieStore.get("provider_username")?.value;

    const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
            method: "user.getTopTracks",
            user: username,
            api_key: key,
            format: "json",
            period: "7day",
            limit: 50,
            page: 1,
        },
    });
    const data = response.data;
    const cleanData = data.toptracks.track.map((track: Track) => ({
        name: track.name,
        artist: track.artist.name,
        playcount: track.playcount,
    }));

    return cleanData;
}

export async function getTrackInfo(tracks: Array<TrackInfo>) {
    const trackData = [];
    const data = tracks;
    for (const item of data) {
        const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
            params: {
                method: "track.getInfo",
                track: item.name,
                artist: item.artist,
                api_key: key,
                format: "json",
            },
        });
        const track = response.data.track;
        const cleanData = {
            duration: track.duration,
            genres: track.toptags?.tag.map((tag: Tag) => tag.name),
            playcount: item.playcount,
        };
        trackData.push(cleanData);
    }
    return trackData;
}
