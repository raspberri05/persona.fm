"use client";

import { useEffect } from "react";
import Login from "./components/login";
import { getCookie } from "cookies-next";

export default function Page() {
    useEffect(() => {
        if (getCookie("username") !== undefined) {
            window.location.href = "/home#overview/recents";
        }
    }, []);
    return (
        <div>
            <Login />
        </div>
    );
}
