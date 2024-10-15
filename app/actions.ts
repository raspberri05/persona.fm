"use server";

import { createClient } from "@/utils/supabase/server";
import { db } from "@/app/api/db";
import { users } from "@/app/api/db/schema";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export async function createUser() {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    let existing = false;
    await db
        .select()
        .from(users)
        .where(eq(users.uid, user?.id || ""))
        .then((data) => {
            if (data[0].uid === user?.id) {
                existing = true;
            }
        });

    await db
        .insert(users)
        .values({
            uid: user?.id || "",
            provider_type: "",
            email: user?.user_metadata.email || "",
            full_name: user?.user_metadata.full_name || "",
            name: user?.user_metadata.name || "",
            picture: user?.user_metadata.picture || "",
        })
        .onConflictDoUpdate({
            target: users.uid,
            set: {
                email: user?.user_metadata.email || "",
                full_name: user?.user_metadata.full_name || "",
                name: user?.user_metadata.name || "",
                picture: user?.user_metadata.picture || "",
            },
        })
        .then(() => {
            console.log("User created");
            return db
                .select()
                .from(users)
                .where(eq(users.uid, user?.id || ""))
                .then((data) => {
                    cookies().set(
                        "provider_username",
                        data[0].provider_username || "",
                    );
                });
        })
        .catch((error) => {
            console.log(error);
        });
}
