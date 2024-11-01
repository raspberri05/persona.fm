import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    cookieStore.set("username", "", { maxAge: 0 });
    cookieStore.set("session", "", { maxAge: 0 });
    redirect("/");
}
