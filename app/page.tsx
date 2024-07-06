"use client";

import { useEffect, useState } from "react";
import Login from "./components/login";
import crypto from "crypto";
import axios from "axios";
import { setCookie } from "cookies-next";
import { getCookies } from "./cookies";

export default function Page() {
  async function setCookies(session_key: string, username: string) {
    console.log("settings");
    setCookie("session_key", session_key);
    setCookie("username", username);
    return "done";
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
        return setCookies(
          response.data.session.key,
          response.data.session.name,
        );
      })
      .then((response) => {
        window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}/home`;
        console.log(response);
      })
      .catch((error) => {
        window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
        console.log(error);
      });
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const isAuthenticated = queryParams.get("authenticated") === "true";
    if (getCookies() != undefined) {
      window.location.href = "/home";
    }

    if (isAuthenticated === false) {
      return;
    } else {
      const token = queryParams.get("token");
      const signature = `api_key${process.env.NEXT_PUBLIC_API_KEY}methodauth.getSessiontoken${token}${process.env.NEXT_PUBLIC_SHARED_SECRET}`;
      const hashedSignature = crypto
        .createHash("md5")
        .update(signature)
        .digest("hex");
      if (token) {
        getSession(token, hashedSignature);
      }
    }

    // if (getCookies() != undefined) {
    //   window.location.href="/home";
    // }
    // //const queryParams = new URLSearchParams(window.location.search);
    // //const isAuthenticated = queryParams.get("authenticated") === "true";
    // const token = queryParams.get("token");
    // const signature = `api_key${process.env.NEXT_PUBLIC_API_KEY}methodauth.getSessiontoken${token}${process.env.NEXT_PUBLIC_SHARED_SECRET}`;
    // const hashedSignature = crypto
    //   .createHash("md5")
    //   .update(signature)
    //   .digest("hex");
    //   if (isAuthenticated && token) {
    //     getSession(token, hashedSignature);
    //   } else {
    //     window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    //   }
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
