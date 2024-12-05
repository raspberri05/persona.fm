import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="dark:text-black text-white">{children}</div>;
}
