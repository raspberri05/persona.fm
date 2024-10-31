import { cookies } from "next/headers";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";
import fs from "fs";
import path from "path";

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
            vibe = res.choices[0].message.content;
        });

    return new Response(JSON.stringify(vibe), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
