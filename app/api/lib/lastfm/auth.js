const axios = require("axios");
const {
  hasCookie,
  getCookie,
  setCookie,
  deleteCookie,
} = require("cookies-next");

/**
 * Fetches information about a user, such as their username and email.
 *
 * Usage:
 * ```javascript
 * getUserInfo("username", "api_key")
 * ```
 *
 * @param {string} username - The username of the user whose information is being fetched
 * @param {string} api_key - The API key for the service.
 * @returns {Promise} A promise that resolves with an object containing the user's information.
 */
function getUserInfo(username, api_key) {
  return axios
    .get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: "user.getInfo",
        user: username,
        api_key: api_key,
        format: "json",
      },
    })
    .then((response) => {
      return response.data.user;
    })
    .catch((error) => {
      console.log(error);
    });
}

/**
 * Retrieves all cookies related to the current session.
 *
 * Usage:
 * ```javascript
 * getCookies("nextjs")
 * ```
 *
 * @param {string} type - The type of cookie you want to use for the service.
 * @returns {Promise} A promise that resolves with an object containing all cookies.
 */
function getCookies(type) {
  if (type === "nextjs") {
    let cookieList = [];
    if (!hasCookie("session_key") || !hasCookie("username")) {
      return undefined;
    } else {
      cookieList.push(getCookie("session_key"));
      cookieList.push(getCookie("username"));
      return cookieList;
    }
  }
  return "only nextjs cookies are supported at this time. Please specify a type";
}

/**
 * Sets cookies for the user session. Currently supports only Next.js applications.
 *
 * Usage:
 * ```javascript
 * setCookies("nextjs", "session_key", "username");
 * ```
 *
 * @param {string} type - The type of application, e.g., "nextjs".
 * @param {string} session_key - The session key to be stored in the cookie.
 * @param {string} username - The username to be stored in the cookie.
 * @returns {string} A confirmation message or an error message if the type is not supported.
 */
function setCookies(type, session_key, username) {
  if (type === "nextjs") {
    console.log("settings");
    setCookie("session_key", session_key);
    setCookie("username", username);
    return "done";
  }
  return "only nextjs cookies are supported at this time. Please specify a type";
}

/**
 * Fetches the session for a user based on the provided token, signature, and API key.
 *
 * Usage:
 * ```javascript
 * getSession("token", "signature", "api_key")
 * ```
 *
 * @param {string} token - The token for the session.
 * @param {string} signature - The signature for the session.
 * @param {string} api_key - The API key for the service.
 * @returns {Promise} A promise that resolves with the session data or rejects with an error.
 */
function getSession(token, signature, api_key) {
  return axios
    .get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: "auth.getSession",
        api_key: api_key,
        token: token,
        api_sig: signature,
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
 * Logs out the user by deleting cookies and redirecting to a specified URL.
 *
 * Usage:
 * ```javascript
 * logout("https://example.com");
 * ```
 *
 * @param {string} redirectUrl - The URL to redirect to after logging out.
 */
function logout(redirectUrl) {
  deleteCookie("session_key");
  deleteCookie("username");
  window.location.href = redirectUrl;
}

module.exports = { getUserInfo, getCookies, setCookies, getSession, logout };
