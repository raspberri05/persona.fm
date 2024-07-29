"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Page() {
    const hasFetched = useRef(false);
    const [persona, setPersona] = useState<any>([]);

    function getMain() {
        return axios
            .get("/api/main")
            .then((res) => {
                const data = JSON.parse(res.data);
                setPersona(data);
                console.log(data);
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
            getMain();
            hasFetched.current = true;
        }
    }, []);

    return (
        <div className="container mx-auto px-2 py-2">
            {persona.length === 0 && (
                <span className="loading loading-spinner loading-md"></span>
            )}
            {persona.length !== 0 && (
                <div>
                    <h1 className="text-3xl font-bold">{persona.vibe}</h1>
                    <br />
                    <p className="text-lg">{`${persona.mainstream?.percent}% mainstream`}</p>
                    <p className="text-lg">{persona.mainstream?.description}</p>
                    <br />
                    <p className="text-lg">{`${persona.energetic?.percent}% energetic`}</p>
                    <p className="text-lg">{persona.energetic?.description}</p>
                </div>
            )}
        </div>
    );
}
