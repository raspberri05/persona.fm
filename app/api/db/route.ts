import { db } from ".";
import { InsertPersona, personas } from "./schema";

export async function POST(request: Request) {
    const res = await request.json();
    const data: InsertPersona = {
        timestamp: new Date(),
        energetic: `${res.energetic.percent.toString()}#${res.energetic.description}`,
        mainstream: `${res.mainstream.percent.toString()}#${res.mainstream.description}`,
        vibe: res.vibe,
        username: "raspberri05",
    };
    await db.insert(personas).values(data);
    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
}
