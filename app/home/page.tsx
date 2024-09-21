"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
                save(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function save(data: any) {
        return axios
            .post("/api/db", data)
            .then((res) => {
                console.log(res);
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
        <div className="container mx-auto px-2">
            <br />
            {persona.length === 0 && (
                <div className="text-center items-center">
                    <p className="text-3xl font-bold">
                        Analyzing your listening habits{" "}
                    </p>
                    <p className="text-lg">(this will take 30-60 seconds)</p>
                    <span className="loading loading-spinner loading-lg" />
                </div>
            )}
            {persona.length !== 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-3xl font-bold">{persona.vibe}</p>
                    <br />
                    <p className="text-xl">{`${persona.mainstream?.percent}% mainstream`}</p>
                    <p className="text-lg">{persona.mainstream?.description}</p>
                    <br />
                    <p className="text-xl">{`${persona.energetic?.percent}% energetic`}</p>
                    <p className="text-lg">{persona.energetic?.description}</p>
                </motion.div>
            )}
        </div>
    );
}
