"use client";

import React, { useState } from "react";
import { setCookie } from "cookies-next";

export default function Login() {
    const [username, setUsername] = useState("");

    function login(e: React.FormEvent) {
        e.preventDefault();
        setCookie("username", username);
        window.location.href = `${process.env.NEXT_PUBLIC_CALLBACK_URL}/home#overview/recents`;
    }

    return (
        <div className="h-dvh content-center grid justify-items-center bg-neutral sm:btn-active">
            <div className="card bg-neutral text-neutral-content w-96">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl">Tunestats</h2>
                    <p className="pb-4 pt-3 text-xl">A better last.fm client</p>
                    <div className="card-actions justify-end">
                        <form onSubmit={(e) => login(e)}>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="enter your username"
                                className="input input-bordered w-full max-w-xs text-center input-error"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
