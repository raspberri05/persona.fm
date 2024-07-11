"use client";

import { useEffect, useState } from "react";
import Login from "./components/login";
import crypto from "crypto";
import { getCookies, setCookies, getSession } from "./api/lib/lastfm/auth";

export default function Page() {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const isAuthenticated = queryParams.get("authenticated") === "true";
    setAuth(isAuthenticated);
    if (getCookies("nextjs") !== undefined) {
      window.location.href = "/home#overview/recents";
    }

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
            window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}/home#overview/recents`;
          })
          .catch((_) => {
            window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
          });
      }
    }
  }, []);

  return (
    <div>
      <Login loading={auth} />
    </div>
  );
}
