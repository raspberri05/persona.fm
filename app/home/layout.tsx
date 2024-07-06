"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { getCookies } from "../cookies";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userInfo, setUserInfo] = useState<any>({});

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

  useEffect(() => {
    const cookieList = getCookies();
    if (cookieList != undefined) {
      getUserInfo(cookieList[1] || "");
      return;
    } else {
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    }
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header
          image={userInfo?.image?.[0]?.["#text"] ?? "/images/image.png"}
        />
        {children}
      </body>
    </html>
  );
}
