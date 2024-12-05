"use client";

import GenerateCard from "@/components/generate-card";
import PersonaCard from "@/components/persona-card";
import { useEffect, useState } from "react";
import { Persona as P } from "@/types";
import PreviousCard from "./previous-card";
import { SelectPersona } from "@/db/schema";
import { Card } from "./ui/card";

export default function Persona() {
    const [persona, setPersona] = useState<P>();
    const [generating, setGenerating] = useState(false);
    const [prevData, setPrevData] = useState<SelectPersona[]>();

    useEffect(() => {
        fetch("/api/persona", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setPrevData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
        <div>
            <div className="flex flex-col space-y-6 ">
                {generating && (
                    <div>
                        <p className="mb-2 text-center">
                            Analyzing your Last.fm history
                        </p>
                        <div className="flex items-center justify-center">
                            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                        </div>
                    </div>
                )}
                {!generating && !persona && (
                    <div className="flex items-center space-y-6">
                        <GenerateCard fcn={logPersona} />
                    </div>
                )}
                {!generating && persona && <PersonaCard data={persona} />}
            </div>
            <div>
                <br />
                <h2 className="text-2xl font-semibold mb-6 border-none">
                    Previous Personas
                </h2>
                <Card className="p-4 md:mt-4 md:w-[75%] w-[95%]">
                    {prevData?.map((prev) => (
                        <PreviousCard
                            data={prev}
                            key={prev.timestamp.toString()}
                        />
                    ))}
                </Card>
            </div>
        </div>
    );
}
