import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const username = cookieStore.get("username")?.value || "";
    await db.delete(users).where(eq(users.username, username));
    cookieStore.set("username", "", { maxAge: 0 });
    cookieStore.set("session", "", { maxAge: 0 });
    redirect("/");
}
