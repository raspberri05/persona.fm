"use client";

import React, { useEffect } from "react";
import PersonaCard from "@/app/components/personacard";
import { authPass } from "@/app/helper";

export default function Page() {
    useEffect(() => {
        authPass();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <PersonaCard />
        </div>
    );
}
