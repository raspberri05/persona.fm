"use client";

import { useEffect, useState } from "react";
import { checkAuth, deleteCookies } from "../helper";

export default function Header() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                    {isClient && checkAuth() && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a href="settings">Settings</a>
                            </li>
                            <li>
                                <a href="home">Home</a>
                            </li>
                        </ul>
                    )}
                </div>
                <a className="btn btn-ghost text-xl">Persona.fm</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {isClient && checkAuth() && (
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href="settings">Settings</a>
                        </li>
                        <li>
                            <a href="home">Home</a>
                        </li>
                    </ul>
                )}
            </div>
            <div className="navbar-end">
                {isClient && checkAuth() ? (
                    <a className="btn" onClick={deleteCookies}>
                        Log Out
                    </a>
                ) : (
                    <a className="btn" href="api/auth">
                        Log In
                    </a>
                )}
            </div>
        </div>
    );
}
