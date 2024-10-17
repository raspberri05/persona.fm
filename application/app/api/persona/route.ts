import { db } from "@/app/api/db";
import { personas } from "@/app/api/db/schema";
import { eq } from "drizzle-orm";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    return db
        .select()
        .from(personas)
        .where(eq(personas.uid, user?.id || ""))
        .then((data) => {
            return new Response(JSON.stringify(data), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        })
        .catch((error) => {
            console.error(error);
            return new Response("Internal Server Error", { status: 500 });
        });
}
