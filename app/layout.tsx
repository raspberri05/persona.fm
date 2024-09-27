import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Persona FM",
        default: "Persona FM",
    },
    description:
        "Your Last.fm music persona generated with Artificial Intelligence",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Header />
                <br />
                <div className="container mx-auto px-2 h-dvh">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
