"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
    const [loggedIn, setLoggedIn] = useState(false);
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
                console.log("User logged in");
            })
            .catch((error) => {
                console.log(error);
            });
    });
    return (
        <div className="text-center">
            <br />
            <p className="text-6xl">Welcome to Persona.fm!</p>
            <br />
            <p className="text-3xl">Your AI-Generated Last.fm music persona</p>
            <br />
            {!loggedIn && (
                <p className="text-xl">
                    <a href="/login" className="underline">
                        Log In
                    </a>{" "}
                    to get started
                </p>
            )}
            {loggedIn && (
                <p className="text-xl">
                    Go to{" "}
                    <a href="/home" className="underline">
                        home
                    </a>
                </p>
            )}
        </div>
    );
}
