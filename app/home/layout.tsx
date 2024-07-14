"use client";

import Tabs from "../components/tabs";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <div className="container mx-auto px-2">
                    <Tabs />
                    <br />
                    {children}
                    <br />
                </div>
            </body>
        </html>
    );
}
