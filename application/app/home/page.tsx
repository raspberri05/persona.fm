"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Persona as Pers } from "@/utils/types";
import DisplayLoading from "@/app/components/molecules/display-loading";
import Persona from "@/app/components/atoms/persona";
import GenerateButton from "@/app/components/molecules/generate-button";
import Previous from "@/app/components/atoms/previous";
import { getCookie, hasCookie } from "cookies-next";

export default function Page() {
    const hasFetched = useRef(false);
    const [providerUsername, setProviderUsername] = useState<string | null>(
        null,
    );
    const [generating, setGenerating] = useState(false);
    const [persona, setPersona] = useState<Pers>({
        energetic: { description: "", percent: 0 },
        mainstream: { description: "", percent: 0 },
        vibe: "",
    });
    const [error, setError] = useState("");

    function getMain() {
        if (!hasFetched.current) {
            setGenerating(true);
            return axios
                .get("/api/main")
                .then((res) => {
                    const data = JSON.parse(res.data);
                    setPersona(data);
                    save(data);
                    hasFetched.current = true;
                })
                .catch((err) => {
                    console.error(err);
                    setError(
                        "Error fetching data. Please reload the page and try again.",
                    );
                });
        }
        return null;
    }

    function save(data: Pers) {
        return axios.post("/api/db", { data }).catch((err) => {
            console.error(err);
        });
    }

    useEffect(() => {
        const username = getCookie("provider_username");
        setProviderUsername(username ? username.toString() : null);
    }, []);

    return (
        <div>
            <br />
            {(!providerUsername || providerUsername === "") && (
                <h2 className="text-center mb-4 text-xl">
                    Make sure to set your last.fm username in{" "}
                    <a href="/settings" className="underline">
                        settings
                    </a>{" "}
                    if you haven&apos;t yet
                </h2>
            )}
            {error && <p>{error}</p>}
            {!(!providerUsername || providerUsername === "") && (
                <GenerateButton generating={generating} getMain={getMain} />
            )}
            {error === "" && persona.vibe === "" && generating && (
                <DisplayLoading />
            )}
            {persona.vibe !== "" && <Persona persona={persona} />}
            <Previous />
        </div>
    );
}
