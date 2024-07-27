"use client";

import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        const cookies = document.cookie;
        if (!cookies.includes("username") || !cookies.includes("session")) {
            window.location.href = "/";
        }
    }, []);

    return (
        <div>
            <p>Hello There</p>
        </div>
    );
}
