import { config } from "dotenv";
import crypto from "crypto";
import axios from "axios";
import { cookies } from "next/headers";
config({ path: ".env" });

export async function GET(request: Request) {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    const signature = `api_key${process.env.LFM_API_KEY}methodauth.getSessiontoken${token}${process.env.LFM_SECRET}`;
    const hashedSignature = crypto
        .createHash("md5")
        .update(signature)
        .digest("hex");
    await axios
        .get("https://ws.audioscrobbler.com/2.0/", {
            params: {
                api_key: process.env.LFM_API_KEY,
                method: "auth.getSession",
                token,
                api_sig: hashedSignature,
                format: "json",
            },
        })
        .then((response) => {
            cookies().set("username", response.data.session.name);
            cookies().set("session", response.data.session.key);
        })
        .catch((_) => {});
    return new Response(null, {
        status: 302,
        headers: {
            Location: `${process.env.URL}/home`,
        },
    });
}
