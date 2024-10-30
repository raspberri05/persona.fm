import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/app/components/organisms/footer";
import Header from "@/app/components/organisms/header";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Persona.fm",
        default: "Persona.fm",
    },
    description:
        "Persona.fm is a new web application that uses the Last.fm API to give users insights into their music listening habits via AI-generated listening personas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="preconnect"
                    href="https://www.google-analytics.com"
                />
            </head>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-5C6EN7BR23"
            ></Script>
            <Script id="google-analytics">
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-5C6EN7BR23');
                    `}
            </Script>
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
