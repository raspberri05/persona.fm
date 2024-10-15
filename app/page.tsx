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
                        Log In with your last.fm account to get started
                    </p>
                    <br />
                    <p className="text-xl">
                        Don&apos;t have a last.fm account? Create one{" "}
                        <a
                            className="link"
                            href="https://www.last.fm/join"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                    </p>{" "}
                </>
            )}
            {redirected && <p>Successfully logged in! Redirecting you now</p>}
        </div>
    );
}
