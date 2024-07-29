import { cookies } from "next/headers";
import axios from "axios";
import { config } from "dotenv";
config({ path: ".env" });

const key = process.env.LFM_API_KEY || "";

export async function getTracks() {
    const cookieStore = cookies();
    const username = cookieStore.get("username")?.value;
    const tracks = [];
    let currPage = 1;
    let maxPage = 1;
    while (currPage <= maxPage) {
        const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
            params: {
                method: "user.getTopTracks",
                user: username,
                api_key: key,
                format: "json",
                period: "7day",
                limit: 200,
                page: currPage,
            },
        });
        const data = response.data;
        const cleanData = data.toptracks.track.map((track: any) => ({
            name: track.name,
            artist: track.artist.name,
            playcount: track.playcount,
        }));
        tracks.push(...cleanData);
        maxPage = parseInt(data.toptracks["@attr"].totalPages);
        currPage++;
    }
    return tracks;
}

export async function getTrackInfo(tracks: Array<any>) {
    const trackData = [];
    const test = tracks.slice(0, 5);
    for (const item of test) {
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
            //name: track.name,
            duration: track.duration,
            //artist: track.artist.name,
            //album: track.album?.title,
            genres: track.toptags?.tag.map((tag: any) => tag.name), // Extract all tag names
            playcount: item.playcount,
        };

        trackData.push(cleanData);
    }
    return trackData;
}
