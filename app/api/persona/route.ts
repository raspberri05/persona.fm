import { cookies } from "next/headers";
import { db } from "../db";
import { personas } from "../db/schema";
import { eq } from "drizzle-orm";

export function GET() {
    const cookieStore = cookies();
    const username = cookieStore.get("username")?.value;

    if (!username) {
        return new Response("Unauthorized", { status: 401 });
    }

    return db
        .select()
        .from(personas)
        .where(eq(personas.username, username))
        .then((data) => {
            console.log(data);
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
