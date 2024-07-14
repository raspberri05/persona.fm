"use client";

import { useEffect, useState } from "react";
import { getCookies, setCookies, getSession } from "../api/lib/lastfm/auth";
import crypto from "crypto";

export default function Page() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const isAuthenticated = queryParams.get("authenticated") === "true";
    const hash = queryParams.get("hash");
    if (getCookies("nextjs") !== undefined) {
      if (window.opener) {
        window.opener.location.reload();
        window.close();
      } else window.location.href = "/home#overview/recents";
    } else {
      if (isAuthenticated) {
        const token = queryParams.get("token");
        const signature = `api_key${process.env.NEXT_PUBLIC_API_KEY}methodauth.getSessiontoken${token}${process.env.NEXT_PUBLIC_SHARED_SECRET}`;
        const hashedSignature = crypto
          .createHash("md5")
          .update(signature)
          .digest("hex");
        if (token) {
          getSession(
            token,
            hashedSignature,
            process.env.NEXT_PUBLIC_API_KEY || "",
          )
            .then((response) => {
              return setCookies(
                "nextjs",
                response.data.session.key,
                response.data.session.name,
              );
            })
            .then((_) => {
              setAuth(true);
              if (window.opener) {
                window.opener.location.reload();
                window.close();
              } else window.location.href = "/home#overview/recents";
            })
            .catch((_) => {
              window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
            });
        }
      }
    }
  }, []);
  return (
    <div>
      {!auth && <p>Logging in...</p>}
      {auth && <p>Logged in</p>}
    </div>
  );
}
