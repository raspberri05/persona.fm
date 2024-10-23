"use client";

import { useEffect } from "react";
import { createUser } from "@/app/api/actions/actions";

export default function Page() {
    useEffect(() => {
        createUser()
            .then((_) => {
                console.log("User creation process completed.");
                window.location.href = "/home";
            })
            .catch((error) => {
                console.error("Error creating user:", error);
            });
    }, []);
    return (
        <div>
            <p>Successfully logged in! Redirecting you now</p>
        </div>
    );
}
