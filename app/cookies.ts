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
