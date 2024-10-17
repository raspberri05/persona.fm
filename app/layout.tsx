import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/app/components/organisms/footer";
import Header from "@/app/components/organisms/header";
import { GoogleAnalytics } from "@next/third-parties/google";

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
            <body className={`${roboto.className} flex flex-col min-h-screen`}>
                <Header />
                <br />
                <br />
                <br />
                <br />
                <main className="flex-grow container mx-auto px-2">
                    {children}
                </main>
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-5C6EN7BR23" />
        </html>
    );
}
