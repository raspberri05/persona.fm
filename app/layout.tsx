import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tunestats",
  description: "Spotify App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className={roboto.className}>
        {children}
        <br />
        <Footer />
      </body>
    </html>
  );
}
