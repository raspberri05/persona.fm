"use client";

import React, { useEffect } from "react";

export default function Page() {
    function submit() {
        window.location.href = "/api/auth";
    }

    useEffect(() => {
        const cookies = document.cookie;
        if (cookies.includes("username") && cookies.includes("session")) {
            window.location.href = "/home";
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card bg-neutral text-neutral-content w-96 max-w-full mx-4">
                <div className="card-body items-center">
                    <h2 className="card-title">Persona.fm</h2>
                    <p>Your last.fm persona</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary"
                            onClick={() => submit()}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
