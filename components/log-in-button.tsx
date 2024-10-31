"use client";

import { Button } from "@/components/ui/button";

export default function LogInButton() {
    function request() {
        window.location.href = `/api/auth/request`;
    }

    return (
        <Button
            className="rounded-xl h-12 px-8 font-medium"
            size="lg"
            onClick={request}
        >
            Log with Last.fm
        </Button>
    );
}
