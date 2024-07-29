import { config } from "dotenv";
import { redirect } from "next/navigation";
config({ path: ".env" });

export function GET() {
    const redirectUrl = `https://last.fm/api/auth/?api_key=${process.env.LFM_API_KEY}&cb=${process.env.URL}/api/callback`;
    redirect(redirectUrl);
}
