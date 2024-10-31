import { cookies } from "next/headers";

export async function GET() {

    const cookieStore = await cookies();
    const username = cookieStore.get("username")?.value || "";
    
    const params = new URLSearchParams({
        method: "user.getInfo",
        user: username.toString(),
        api_key: process.env.LASTFM_API_KEY || "",
        format: "json",
    });

    let userInfo;

    await fetch(`https://ws.audioscrobbler.com/2.0/?${params.toString()}`)
    .then((response) => response.json())
    .then((data) => {
        userInfo = data.user
    })
    return new Response(JSON.stringify(userInfo))
}