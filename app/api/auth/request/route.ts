import { redirect } from "next/navigation";

export async function GET() {
    return redirect(
        `https://www.last.fm/api/auth/?api_key=${process.env.LASTFM_API_KEY}&cb=${process.env.URL}/api/auth/callback`,
    );
}
