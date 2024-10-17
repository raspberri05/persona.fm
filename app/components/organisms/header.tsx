"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import LinkButton from "@/app/components//molecules/link-button";

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
        client()
            .then((_) => {
                console.log("User logged in");
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <div className="navbar bg-primary fixed top-0 left-0 w-full z-50 py-3">
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content">
                        <li>
                            <LinkButton
                                variant="primary"
                                text="home"
                                href="home"
                            />
                        </li>
                        <li>
                            <LinkButton
                                variant="primary"
                                text="settings"
                                href="settings"
                            />
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-secondary" href="/">
                    persona.fm
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-2 menu-horizontal">
                    <li>
                        <LinkButton
                            variant="secondary"
                            text="home"
                            href="home"
                        />
                    </li>
                    <li>
                        <LinkButton
                            variant="secondary"
                            text="settings"
                            href="settings"
                        />
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {!loggedIn && (
                    <LinkButton
                        variant="secondary"
                        text="log in"
                        href="login"
                    />
                )}
                {loggedIn && (
                    <LinkButton
                        variant="secondary"
                        text="log out"
                        href="logout"
                    />
                )}
            </div>
        </div>
    );
}
