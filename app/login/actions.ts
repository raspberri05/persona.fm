"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${process.env.URL}/auth/callback`,
        },
    });

    if (error) {
        redirect("/error");
    }

    if (data.url) {
        redirect(data.url);
    }
}
