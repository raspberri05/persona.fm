const cheerio = require("cheerio");
const axios = require("axios");

function capitalize(type) {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

/**
 * Retrieves the count of artists in the user's library.
 *
 * Usage:
 * ```javascript
 * getArtistCount("username", true)
 * getArtistCount("username", false)
 * ```
 *
 * @param {string} username - The username of the user whose artist count is being retrieved.
 * @param {boolean} cors - Whether to use a CORS proxy to bypass CORS restrictions.
 * @param {string} type - Scrobbles (""), artists, albums, or tracks
 * @returns {Promise} A promise that resolves with the number of artists in the user's library.
 */
function getOverallCount(username, cors, type) {
  const url = `https://www.last.fm/user/${username}/library/${type}`;

  return axios
    .get(cors ? `https://corsproxy.io/?${encodeURIComponent(url)}` : url)
    .then((response) => {
      const $ = cheerio.load(response.data);
      return $("ul.metadata-list > li:first-child > p").text().trim();
    })
    .catch((error) => {
      console.error("Scraping failed:", error);
      throw error;
    });
}

/**
 * Retrieves the user's recent tracks from the service.
 *
 * Usage:
 * ```javascript
 * getRecentTracks("username", "api_key")
 * ```
 *
 * @param {string} username - The username whose recent tracks are to be fetched.
 * @param {string} api_key - The API key for the service.
 * @returns {Promise} - A promise that resolves with the recent tracks data or rejects with an error.
 */
function getRecentTracks(username, api_key) {
  return axios
    .get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: "user.getRecentTracks",
        user: username,
        api_key: api_key,
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

/**
 * Retrieves the user's top tracks from the service.
 *
 * Usage:
 * ```javascript
 * getTopTracks("username", "period", "limit", "page", "api_key)
 * ```
 *
 * @param {string} user - The username whose top tracks are to be fetched.
 * @param {string} type - Top tracks, artists, or albums
 * @param {string} period - The time period to fetch the top tracks for.
 * @param {number} limit - The number of tracks to fetch.
 * @param {number} page - The page number of the results.
 * @param {string} api_key - The API key for the service.
 * @returns {object} - An object containing the user's top tracks.
 */
function getTopItems(user, type, period, limit, page, api_key) {
  return axios
    .get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: `user.getTop${capitalize(type)}`,
        user: user,
        period: period,
        limit: limit,
        page: page,
        api_key: api_key,
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

module.exports = { getRecentTracks, getOverallCount, getTopItems };
