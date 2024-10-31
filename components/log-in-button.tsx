"use client";

import { Button } from "@/components/ui/button";

export default function LogInButton() {
    function redirect(url: string) {
        window.location.href = url;
    }

    return (
        <Button
            className="rounded-xl h-12 px-8 font-medium"
            size="lg"
            onClick={() => redirect("/home")}
        >
            Log with Last.fm
        </Button>
    );
}
