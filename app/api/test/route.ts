import { db } from "../db";
import { InsertUser, usersTable } from "../db/schema";

export async function GET(request: Request) {
    await db.insert(usersTable);
    return new Response("Hello, world!");
}
