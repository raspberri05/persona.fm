"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
const { getArtistCount, getUserInfo, getCookies } = require("lastfm-api-node");

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userInfo, setUserInfo] = useState<any>({});
  const [totalArtists, setTotalArtists] = useState<string>("");

  useEffect(() => {
    const fetchData = async (username: string) => {
      const data = await getUserInfo(username, process.env.NEXT_PUBLIC_API_KEY);
      return data;
    };
    const cookieList = getCookies("nextjs");
    if (cookieList != undefined) {
      fetchData(cookieList[1] || "")
        .then((response) => {
          setUserInfo(response);
          return getArtistCount(cookieList[1], true);
        })
        .then((response) => {
          setTotalArtists(response);
        });
    } else {
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    }
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header
          image={userInfo?.image?.[0]?.["#text"] ?? "/images/image.png"}
          scrobbles={userInfo?.playcount}
          artists={totalArtists}
        />
        <br />
        {children}
      </body>
    </html>
  );
}
