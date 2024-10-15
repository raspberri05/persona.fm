"use client";

import axios from "axios";
import { useRef, useState } from "react";
import { Persona } from "@/app/types";
import Loading from "@/app/components/loading";
import PersonaDisplay from "@/app/components/personadisplay";
import PersonaFloat from "@/app/components/personafloat";
import Previous from "../components/previous";
import { getCookie } from 'cookies-next';

export default function Page() {
    const hasFetched = useRef(false);
    const [generating, setGenerating] = useState(false);
    const [persona, setPersona] = useState<Persona>({
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

    function save(data: Persona) {
        return axios.post("/api/db", { data }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <div>
            <br />
            {getCookie("username") === "" && <h2 className="text-center mb-4 text-xl">
                Make sure to set your last.fm username in{" "}
                <a href="/settings" className="underline">
                    settings
                </a>{" "}
                if you haven&apos;t yet
            </h2>}
            <p>{error}</p>
            <PersonaFloat generating={generating} getMain={getMain} />
            {error === "" && persona.vibe === "" && generating && <Loading />}
            {persona.vibe !== "" && <PersonaDisplay persona={persona} />}
            <Previous />
        </div>
    );
}
