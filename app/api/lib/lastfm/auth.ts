import axios from "axios";

import { hasCookie, getCookie, setCookie, deleteCookie } from "cookies-next";

function getUserInfo(username: string, api_key: string) {
  return axios
    .get("https://ws.audioscrobbler.com/2.0/", {
      params: {
        method: "user.getInfo",
        user: username,
        api_key,
        format: "json",
      },
    })
    .then((response) => {
      return response.data.user;
    })
    .catch((error) => {
      return error;
    });
}

function getCookies(type: string) {
  if (type === "nextjs") {
    const cookieList = [];
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

function setCookies(type: string, session_key: string, username: string) {
  if (type === "nextjs") {
    setCookie("session_key", session_key);
    setCookie("username", username);
    return "done";
  }
  return "only nextjs cookies are supported at this time. Please specify a type";
}

function getSession(token: string, signature: string, api_key: string) {
  return axios
    .get("https://ws.audioscrobbler.com/2.0/", {
      params: {
        method: "auth.getSession",
        api_key,
        token,
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

function logout(redirectUrl: string) {
  deleteCookie("session_key");
  deleteCookie("username");
  window.location.href = redirectUrl;
}

export { getUserInfo, getCookies, setCookies, getSession, logout };
