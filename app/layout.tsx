import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/mode-toggle";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Script from "next/script";

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
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="preconnect"
                    href="https://www.googletagmanager.com"
                />
                <link
                    rel="preconnect"
                    href="https://www.google-analytics.com"
                />
            </head>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-5C6EN7BR23"
                strategy="lazyOnload"
             />
            <Script id="google-analytics" strategy="lazyOnload">
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-5C6EN7BR23');
                    `}
            </Script>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div>
                        <Nav />
                    </div>
                    <div
                        style={{
                            background:
                                "linear-gradient(45deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                        }}
                    >
                        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 px-4 min-h-[70vh]">
                            {children}
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                    <div className="fixed bottom-4 right-4">
                        <ModeToggle />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
