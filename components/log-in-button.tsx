"use client";

import { Button } from "@/components/ui/button";

export default function LogInButton() {
    function request() {
        window.location.href=`https://www.last.fm/api/auth/?api_key=${process.env.LASTFM_API_KEY}&cb=${encodeURIComponent(window.location.href)}`;
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
