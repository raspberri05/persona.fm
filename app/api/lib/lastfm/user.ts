import * as cheerio from "cheerio";
import axios from "axios";

function capitalize(type: string) {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

function getOverallCount(username: string, cors: boolean, type: string) {
  const url = `https://www.last.fm/user/${username}/library/${type}`;

  return axios
    .get(cors ? `https://corsproxy.io/?${encodeURIComponent(url)}` : url)
    .then((response) => {
      const data = cheerio.load(response.data);
      return data("ul.metadata-list > li:first-child > p").text().trim();
    })
    .catch((error) => {
      console.error("Scraping failed:", error);
      throw error;
    });
}

function getRecentTracks(username: string, api_key: string) {
  return axios
    .get("https://ws.audioscrobbler.com/2.0/", {
      params: {
        method: "user.getRecentTracks",
        user: username,
        api_key,
        format: "json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

function getTopItems(
  user: string,
  type: string,
  period: string,
  limit: number,
  page: number,
  api_key: string,
) {
  return axios
    .get("https://ws.audioscrobbler.com/2.0/", {
      params: {
        method: `user.getTop${capitalize(type)}`,
        user,
        period,
        limit,
        page,
        api_key,
        format: "json",
      },
    })
    .then((response) => {
      return response.data[`top${type}`];
    })
    .catch((error) => {
      return error;
    });
}

function getFriends(
  user: string,
  api_key: string,
  limit: number,
  page: number,
) {
  return axios
    .get("https://ws.audioscrobbler.com/2.0/", {
      params: {
        method: "user.getFriends",
        user,
        api_key,
        limit,
        page,
        recenttracks: true,
        format: "json",
      },
    })
    .then((response) => {
      return response.data.friends;
    })
    .catch((error) => {
      return error;
    });
}

export { getRecentTracks, getOverallCount, getTopItems, getFriends };
