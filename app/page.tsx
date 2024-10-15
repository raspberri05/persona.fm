"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { createUser } from "./actions";

export default function Page() {
    const searchParams = useSearchParams();
    const redirected = searchParams.get("redirected") === "true";

    useEffect(() => {
        // Call createUser when the component mounts
        if (redirected) {
            createUser()
                .then((user) => {
                    console.log("User creation process completed.");
                    window.location.href = "/home";
                })
                .catch((error) => {
                    console.error("Error creating user:", error);
                });
        }
    }, [redirected]);

    return (
        <div className="text-center">
            {!redirected && (
                <>
                    <br />
                    <p className="text-6xl">Welcome to Persona.fm!</p>
                    <br />
                    <p className="text-3xl">
                        Your AI-Generated Last.fm music persona
                    </p>
                    <br />
                    <p className="text-xl">
                        <a href="/login" className="underline">
                            Log In
                        </a>{" "}
                        to get started
                    </p>
                </>
            )}
            {redirected && <p>Successfully logged in! Redirecting you now</p>}
        </div>
    );
}
