"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    async function client() {
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (user?.id) {
            console.log(user);
            setLoggedIn(true);
        }
    }

    useEffect(() => {
        client()
            .then((_) => {
                console.log("checked user");
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    });
    return (
        <div className="text-center fade-in">
            <br />
            <h1 className="text-6xl">Welcome to Persona.fm!</h1>
            <br />
            <p className="text-3xl">Your AI-Generated Last.fm music persona</p>
            <br />
            {!loggedIn && !loading && (
                <p className="text-xl fade-in">
                    <a href="/login" className="underline">
                        Log In
                    </a>{" "}
                    to get started
                </p>
            )}
            {loggedIn && !loading && (
                <p className="text-xl fade-in">
                    Go to{" "}
                    <a href="/home" className="underline">
                        home
                    </a>
                </p>
            )}
        </div>
    );
}
