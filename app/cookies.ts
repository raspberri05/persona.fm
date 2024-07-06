import { hasCookie, getCookie } from "cookies-next"; // Assuming you're using cookies-next for cookie management
import axios from "axios";

export function getCookies() {
  let cookieList = [];
  if (!hasCookie("session_key") || !hasCookie("username")) {
    return undefined;
  } else {
    cookieList.push(getCookie("session_key"));
    cookieList.push(getCookie("username"));
    return cookieList;
  }
}

export async function getUserInfo(user: string) {
  return axios
    .get(`https://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: "user.getInfo",
        user: user,
        api_key: process.env.NEXT_PUBLIC_API_KEY,
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
