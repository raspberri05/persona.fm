"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import LinkButton from "@/app/components//molecules/link-button";

export default function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [image, setImage] = useState("");
    const supabase = createClient();

    async function client() {
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (user?.id) {
            console.log(user);
            setLoggedIn(true);
            setImage(user.user_metadata.picture);
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
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primary text-secondary rounded-box z-[1] mt-5 w-18 p-2 shadow items-center"
                    >
                        <li className="hover:opacity-80">
                            <a href="/home">home</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-secondary" href="/">
                    persona.fm
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {loggedIn && (
                    <ul className="menu-horizontal">
                        <li>
                            <LinkButton
                                variant="secondary"
                                text="home"
                                href="home"
                            />
                        </li>
                    </ul>
                )}
            </div>
            <div className="navbar-end">
                {loggedIn && (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">
                            {" "}
                            <img
                                src={image}
                                alt="logo"
                                className="h-12 rounded-full mr-2"
                            />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-primary text-secondary rounded-box z-[1] mt-5 w-18 p-2 shadow items-center"
                        >
                            <li className="hover:opacity-80">
                                <a href="/settings">settings</a>
                            </li>
                            <li className="hover:opacity-80">
                                <a href="/api/auth/logout">log out</a>
                            </li>
                        </ul>
                    </div>
                )}

                {!loggedIn && (
                    <LinkButton
                        variant="secondary"
                        text="log in"
                        href="login"
                    />
                )}
            </div>
        </div>
    );
}
