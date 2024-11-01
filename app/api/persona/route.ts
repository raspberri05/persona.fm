/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { InsertPersona, personas } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";

const openai = new OpenAI();

const schema = z.object({
    vibe: z.string(),
    mainstream: z.object({
        description: z.string(),
        percent: z.number(),
    }),
    energetic: z.object({
        description: z.string(),
        percent: z.number(),
    }),
});

export async function POST() {
    const cookieStore = await cookies();
    const username = cookieStore.get("username")?.value || "";

    const params = new URLSearchParams({
        method: "user.getTopTracks",
        user: username.toString(),
        api_key: process.env.LASTFM_API_KEY || "",
        format: "json",
    });

    let vibe;

    await fetch(`https://ws.audioscrobbler.com/2.0/?${params.toString()}`)
        .then((response) => response.json())
        .then((data) => {
            const response = data.toptracks.track;
            const tracks = response.map((track: any) => ({
                name: track.name,
                artist: track.artist.name,
                duration: track.duration,
                playcount: track.playcount,
                rank: track["@attr"].rank,
            }));
            return tracks;
        })
        .then((res) => {
            const jsonData = JSON.parse(
                fs.readFileSync(
                    path.resolve("app/api/persona/openai.json"),
                    "utf-8",
                ),
            );
            return openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: jsonData.systemInstruction },
                    {
                        role: "user",
                        content: JSON.stringify(res),
                    },
                ],
                response_format: zodResponseFormat(schema, "event"),
            });
        })
        .then((res) => {
            vibe = res.choices[0].message.content || "";
            const parsedVibe = JSON.parse(vibe.toString());
            const data: InsertPersona = {
                username: username.toString(),
                vibe: parsedVibe.vibe,
                mainstream_description: parsedVibe.mainstream.description,
                mainstream_percent: parsedVibe.mainstream.percent,
                energetic_description: parsedVibe.energetic.description,
                energetic_percent: parsedVibe.energetic.percent,
            };
            return db.insert(personas).values(data);
        })
        .catch((error) => console.log(error));

    return new Response(JSON.stringify(vibe), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function GET() {
    let result;
    const cookieStore = await cookies();
    const username = cookieStore.get("username")?.value || "";
    await db
        .select()
        .from(personas)
        .where(eq(personas.username, username))
        .then((response) => {
            result = response;
        })
        .catch((error) => {
            console.log(error);
        });
    return new Response(JSON.stringify(result));
}
