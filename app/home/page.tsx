"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Persona as Pers } from "@/utils/types";
import DisplayLoading from "@/app/components/molecules/display-loading";
import Persona from "@/app/components/atoms/persona";
import GenerateButton from "@/app/components/molecules/generate-button";
import Previous from "@/app/components/atoms/previous";
import { getCookie } from "cookies-next";

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
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(false);
    const [cancel, setCancel] = useState(false);

    function getMain() {
        if (!hasFetched.current) {
            setGenerating(true);
            setCancel(true);
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
        setLoading(false);
    }, []);

    return (
        <div>
            <br />
            {(!providerUsername || providerUsername === "") && !loading && (
                <>
                    <h2 className="mb-4 text-xl">
                        Set your last.fm username in{" "}
                        <a href="/settings" className="underline">
                            settings
                        </a>{" "}
                        to discover your unique listener persona!
                    </h2>
                    <h3 className="mb-4 text-lg">
                        Don&apos;t have a last.fm account? Create one{" "}
                        <a
                            className="underline"
                            href="https://last.fm"
                            target="_blank"
                            rel="noopener"
                        >
                            here!
                        </a>
                    </h3>
                    <i>
                        Note: Support for other music services will be added in
                        future updates!
                    </i>
                </>
            )}
            {first && !cancel && (
                <div className="text-center">
                    <p>Click below to generate your first persona!</p>
                    <br />
                </div>
            )}
            {error && <p>{error}</p>}
            {!(!providerUsername || providerUsername === "") && !loading && (
                <GenerateButton generating={generating} getMain={getMain} />
            )}
            <br />
            {loading && <div className="h-12" />}
            {error === "" && persona.vibe === "" && generating && (
                <DisplayLoading />
            )}
            {persona.vibe !== "" && <Persona persona={persona} />}
            <Previous first={setFirst} />
        </div>
    );
}
