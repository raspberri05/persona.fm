"use client";

import { useEffect, useState } from "react";
import crypto from "crypto";
import axios from "axios";
import Header from "./components/header";
import Recents from "./components/recents";
import Loading from "./components/loading";
import Login from "./components/login";
import Info from "./components/info";
import { setCookie, getCookie, hasCookie } from "cookies-next";
import Tabs from "./components/tabs";

export default function Home() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [sessionKey, setSessionKey] = useState<string>("");
  const [recentTracks, setRecentTracks] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState<any>({});
  const [activeTab, setActiveTab] = useState<string>("recent-tracks");
  const [loading, setLoading] = useState<boolean>(true);

  function setCookies(session_key: string, username: string) {
    setCookie("session_key", session_key);
    setCookie("username", username);
  }

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

  function getSession(token: string, signature: string) {
    axios
      .get(`https://ws.audioscrobbler.com/2.0/`, {
        params: {
          method: "auth.getSession",
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          token: token,
          api_sig: signature,
          format: "json",
        },
      })
      .then((response) => {
        setCookies(response.data.session.key, response.data.session.name);
        window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
      })
      .catch((error) => {
        // handle error
        window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
        console.log(error);
      });
  }

  function getUserInfo(user: string) {
    axios
      .get(`https://ws.audioscrobbler.com/2.0/`, {
        params: {
          method: "user.getInfo",
          user: user,
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          format: "json",
        },
      })
      .then((response) => {
        setUserInfo(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getRecentTracks(username: string) {
    axios
      .get(`https://ws.audioscrobbler.com/2.0/`, {
        params: {
          method: "user.getRecentTracks",
          user: username,
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          format: "json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setRecentTracks(response.data.recenttracks.track);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function switchTab(tab: string) {
    setActiveTab(tab);
  }

  useEffect(() => {
    const cookieList = getCookies();
    if (cookieList != undefined) {
      getUserInfo(cookieList[1] || "");
      setAuthenticated(true);
      setSessionKey(cookieList[0] || "");
      getRecentTracks(cookieList[1] || "");
      return;
    }

    const queryParams = new URLSearchParams(window.location.search);
    const isAuthenticated = queryParams.get("authenticated") === "true";
    const token = queryParams.get("token");
    const signature = `api_key${process.env.NEXT_PUBLIC_API_KEY}methodauth.getSessiontoken${token}${process.env.NEXT_PUBLIC_SHARED_SECRET}`;
    const hashedSignature = crypto
      .createHash("md5")
      .update(signature)
      .digest("hex");
    if (isAuthenticated && token) {
      setAuthenticated(true);
      console.log("here");
      getSession(token, hashedSignature);
    }
  }, []);

  return (
    <div>
      {!authenticated && <Login />}
      {authenticated && (
        <div>
          <Header
            image={userInfo?.image?.[0]?.["#text"] ?? "/images/image.png"}
          />
          <div className="container mx-auto">
            <br />
            <Info userInfo={userInfo} />
            <br />
            <Tabs activeTab={activeTab} switchTab={switchTab} />
            <br />
            {loading && <Loading />}
            {activeTab === "recent-tracks" && (
              <Recents recentTracks={recentTracks} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
