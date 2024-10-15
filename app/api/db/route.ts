import { db } from ".";
import { InsertPersona, personas } from "./schema";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const res = await request.json();
    console.log(res);
    const data: InsertPersona = {
        timestamp: new Date(),
        energetic: `${res.data.energetic.percent.toString()}#${res.data.energetic.description}`,
        mainstream: `${res.data.mainstream.percent.toString()}#${res.data.mainstream.description}`,
        vibe: res.data.vibe,
        uid: user?.id || "",
    };
    await db.insert(personas).values(data);
    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
}
