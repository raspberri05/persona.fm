"use client";

import { useEffect, useState } from "react";
import Login from "./components/login";
import { getCookie, hasCookie } from "cookies-next";

export default function Home() {
    const [authenticated, setAuthenticated] = useState<boolean>(false);

  function getCookies() {
    let cookieList = [];
    if (!hasCookie("session_key") || !hasCookie("username")) {
      return undefined;
    } else {
      cookieList.push(getCookie("session_key"));
      cookieList.push(getCookie("username"));
      return cookieList;
    }
  }

  useEffect(() => {
    const cookieList = getCookies();
    if (cookieList != undefined) {
      window.location.href="/home";
    }
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
