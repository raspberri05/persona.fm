"use client";

import React, { useState } from "react";

export default function Page() {
    const [username, setUsername] = useState("");

    function submit(e: React.FormEvent) {
        e.preventDefault();
        window.location.href = `/user/${username}`;
    }

    return (
        <div className="items-center grid justify-items-center h-dvh">
            <div className="card bg-neutral text-neutral-content w-96">
                <div className="card-body items-center">
                    <h2 className="card-title">Persona.fm</h2>
                    <p>Your last.fm persona</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
