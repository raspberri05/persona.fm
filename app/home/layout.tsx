"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import { getCookies, getUserInfo } from "../cookies";
const { getAllArtists } = require("lastfm-scraper");

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userInfo, setUserInfo] = useState<any>({});
  const [totalArtists, setTotalArtists] = useState<string>("");

  useEffect(() => {
    const fetchData = async (username: string) => {
      const data = await getUserInfo(username);
      return data;
    };
    const cookieList = getCookies();
    if (cookieList != undefined) {
      fetchData(cookieList[1] || "")
        .then((response) => {
          setUserInfo(response);
          return getAllArtists(cookieList[1], true);
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
