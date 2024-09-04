import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Persona FM",
    description: "Your Last FM music persona generated with Artificial Intelligence",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <div className="container mx-auto px-2 h-dvh">{children}</div>
            </body>
        </html>
    );
}
