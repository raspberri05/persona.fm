"use client";

import { useEffect } from "react";
import { createUser } from "@/app/api/actions/actions";
import Loading from "@/app/components/atoms/loading";

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
        <div className="text-center">
            <h1>Successfully logged in! Redirecting you now</h1>
            <Loading />
        </div>
    );
}
