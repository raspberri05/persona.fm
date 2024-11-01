import crypto from "crypto";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { db } from "@/db";
import { InsertUser, users } from "@/db/schema";

export async function GET(request: Request) {
    const cookieStore = await cookies();
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    const signature = `api_key${process.env.LASTFM_API_KEY}methodauth.getSessiontoken${token}${process.env.LASTFM_SHARED_SECRET}`;
    const hashedSignature = crypto
        .createHash("md5")
        .update(signature)
        .digest("hex");

    const params = new URLSearchParams({
        method: "auth.getSession",
        api_key: process.env.LASTFM_API_KEY || "",
        token: token || "",
        api_sig: hashedSignature,
        format: "json",
    });

    await fetch(`https://ws.audioscrobbler.com/2.0/?${params.toString()}`)
        .then((response) => response.json())
        .then((data) => {
            cookieStore.set("username", data.session.name);
            cookieStore.set("session", data.session.key);
            const values: InsertUser = {
                username: data.session.name,
            };
            return db.insert(users).values(values);
        })
        .catch((error) => {
            console.log(error);
        });
    return redirect("/home");
}
