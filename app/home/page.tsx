"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Persona } from "@/app/types";
import Loading from "@/app/components/loading";
import PersonaDisplay from "@/app/components/personadisplay";

export default function Page() {
    const hasFetched = useRef(false);
    const [persona, setPersona] = useState<Persona>({
        energetic: { description: "", percent: 0 },
        mainstream: { description: "", percent: 0 },
        vibe: "",
    });

    function getMain() {
        return axios
            .get("/api/main")
            .then((res) => {
                const data = JSON.parse(res.data);
                setPersona(data);
                save(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function save(data: Persona) {
        return axios.post("/api/db", data).catch((err) => {
            console.error(err);
        });
    }

    function seePrevious() {
        window.location.href = "/previous";
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
            {persona.vibe === "" && <Loading />}
            {persona.vibe !== "" && (
                <div>
                    <PersonaDisplay persona={persona} />
                    <br />
                    <button className="btn glass" onClick={seePrevious}>
                        See previous personas
                    </button>
                </div>
            )}
        </div>
    );
}
