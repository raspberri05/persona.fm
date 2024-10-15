"use server";

import { cookies } from "next/headers";
import { db } from "../api/db";
import { createClient } from "@/utils/supabase/server";
import { users } from "@/app/api/db/schema";
import { eq } from "drizzle-orm";

export async function addUsername(formData: FormData) {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    const uid = user?.id || "";
    const cookieStore = cookies();
    const username = formData.get("username") as string;
    cookieStore.set("provider_username", username);
    await db
        .update(users)
        .set({ provider_type: "lastfm", provider_username: username })
        .where(eq(users.uid, uid));
}
