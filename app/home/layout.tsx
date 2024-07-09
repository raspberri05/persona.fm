"use client";

import { useEffect } from "react";
import Tabs from "../components/tabs";
import { getCookies } from "../api/lib/lastfm/auth";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const cookieList = getCookies("nextjs");
    if (cookieList != undefined) {
      return
    } else {
      window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}`;
    }
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="container mx-auto px-4">
          <Tabs />
          <br />
          {children}
          <br />
        </div>
      </body>
    </html>
  );
}
