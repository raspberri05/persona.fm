import { db } from ".";
import { InsertPersona, personas } from "./schema";

export async function POST(request: Request) {
    const res = await request.json();
    console.log(res);
    const data: InsertPersona = {
        timestamp: new Date(),
        energetic: `${res.energetic.toString()}#${res.energetic.description}`,
        mainstream: `${res.mainstream.percent.toString()}#${res.mainstream.description}`,
        vibe: res.vibe,
        username: res.username,
    };
    await db.insert(personas).values(data);
    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
}
