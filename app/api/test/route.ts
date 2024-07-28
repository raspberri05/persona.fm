import { db } from "../db";

export async function GET(request: Request) {
    return new Response("Hello, world!");
}
