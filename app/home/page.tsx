"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Persona } from "@/app/types";
import Loading from "@/app/components/loading";
import PersonaDisplay from "@/app/components/personadisplay";
import FloatNav from "@/app/components/floatnav";
import PersonaFloat from "@/app/components/personafloat";
import { authFail } from "@/app/helper";

export default function Page() {
    const hasFetched = useRef(false);
    const [generating, setGenerating] = useState(false);
    const [persona, setPersona] = useState<Persona>({
        energetic: { description: "", percent: 0 },
        mainstream: { description: "", percent: 0 },
        vibe: "",
    });

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
                });
        }
        return null;
    }

    function save(data: Persona) {
        return axios.post("/api/db", data).catch((err) => {
            console.error(err);
        });
    }

    useEffect(() => {
        authFail();
    }, []);

    return (
        <div className="container mx-auto px-2">
            <br />
            <FloatNav />
            <br />
            <PersonaFloat generating={generating} getMain={getMain} />
            <br />
            <br />
            {persona.vibe === "" && generating && <Loading />}
            {persona.vibe !== "" && <PersonaDisplay persona={persona} />}
        </div>
    );
}
