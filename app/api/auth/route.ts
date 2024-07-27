import { config } from "dotenv";
config({ path: ".env" });

export async function GET() {
    const redirectUrl = `https://last.fm/api/auth/?api_key=${process.env.LFM_API_KEY}&cb=${process.env.URL}/api/callback`;
    return new Response(null, {
        status: 302,
        headers: {
            Location: redirectUrl,
        },
    });
}
