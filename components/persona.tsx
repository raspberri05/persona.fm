"use client";

import GenerateCard from "@/components/generate-card";
import PersonaCard from "@/components/persona-card";
import { useState } from "react";
import { Persona as P } from "@/types";

export default function Persona() {
    const [persona, setPersona] = useState<P>();
    const [generating, setGenerating] = useState(false);

    function logPersona() {
        setGenerating(true);
        fetch("/api/persona", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setPersona(JSON.parse(data.toString()));
                setGenerating(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="flex flex-col items-center space-y-6 ">
            {generating && (
                <div>
                    <p className="mb-2">Analyzing your Last.fm history</p>
                    <div className="flex items-center justify-center">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                    </div>
                </div>
            )}
            {!generating && !persona && <GenerateCard fcn={logPersona} />}
            {!generating && persona && <PersonaCard data={persona} />}
        </div>
    );
}
