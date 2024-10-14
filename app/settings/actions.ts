"use server";

import { cookies } from "next/headers";

export async function addUsername(formData: FormData) {
    const cookieStore = cookies();
    const username = formData.get("username") as string;
    cookieStore.set("username", username);
}
