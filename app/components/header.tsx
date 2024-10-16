"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    const supabase = createClient();

    async function client() {
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (user?.id) {
            setLoggedIn(true);
        }
    }

    useEffect(() => {
        client().then((_) => {
            console.log("User logged in");
        });
    });

    return (
        <div className="navbar bg-primary fixed top-0 left-0 w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-secondary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primary text-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a href="settings">settings</a>
                        </li>
                        <li>
                            <a href="home">home</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-secondary" href="/">
                    persona.fm
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2">
                    <li>
                        <a href="settings" className="btn btn-secondary">
                            settings
                        </a>
                    </li>
                    <li>
                        <a href="home" className="btn btn-secondary">
                            home
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {!loggedIn && (
                    <a className="btn btn-secondary" href="/login">
                        log in
                    </a>
                )}
                {loggedIn && (
                    <a className="btn btn-secondary" href="/api/auth/logout">
                        log out
                    </a>
                )}
            </div>
        </div>
    );
}
