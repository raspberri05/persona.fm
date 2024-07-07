"use client";

import { useEffect } from "react";
import Login from "./components/login";
import crypto from "crypto";
const { getCookies, setCookies, getSession } = require("lastfm-api-node");

export default function Page() {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const isAuthenticated = queryParams.get("authenticated") === "true";
    if (getCookies("nextjs") != undefined) {
      window.location.href = "/home#overview";
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
        getSession(token, hashedSignature, process.env.NEXT_PUBLIC_API_KEY)
          .then((response: any) => {
            return setCookies(
              "nextjs",
              response.data.session.key,
              response.data.session.name,
            );
          })
          .then((response: any) => {
            window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}/home#overview`;
          })
          .catch((error: any) => {
            window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
          });
      }
    }
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}
