"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { getCookies, getUserInfo } from "../cookies";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    const fetchData = async (username: string) => {
      const data = await getUserInfo(username);
      return data
    };
    const cookieList = getCookies();
    if (cookieList != undefined) {
      fetchData(cookieList[1] || "")
      .then((response) => {
        setUserInfo(response)
      })
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
