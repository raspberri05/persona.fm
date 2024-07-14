import axios from "axios";

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

export { getImage };
