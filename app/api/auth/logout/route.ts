import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
    const cookieStore = cookies();
    const allCookies = cookieStore.getAll();

    allCookies.forEach((cookie) => {
        if (
            cookie.name.startsWith("sb-") ||
            cookie.name === "provider_username" ||
            cookie.name.startsWith("_ga")
        ) {
            cookieStore.set(cookie.name, "", {
                maxAge: -1, // This effectively deletes the cookie
                path: "/", // Ensure the path is correct for deletion
            });
        }
    });

    return NextResponse.redirect(process.env.URL || "");
}
