"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Page() {
    const [vibe, setVibe] = useState<any>();
    const hasFetched = useRef(false);

    async function getMain() {
        return axios
            .get("/api/main")
            .then((res) => {
                const data = JSON.parse(res.data); // Ensure data is in JSON format
                setVibe(data);
                console.log(data.vibe);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    useEffect(() => {
        const cookies = document.cookie;
        if (!cookies.includes("username") || !cookies.includes("session")) {
            window.location.href = "/";
        }

        if (!hasFetched.current) {
            //getMain();
            hasFetched.current = true;
        }
    }, []);

    return (
        <div className="container mx-auto px-2 py-2">
            <h1 className="text-3xl font-bold">Home</h1>
            <p className="text-lg">Welcome to the home page!</p>
        </div>
    );
}
