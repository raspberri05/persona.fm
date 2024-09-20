import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    username: text("username").primaryKey(),
});

export const personas = pgTable("personas", {
    timestamp: timestamp('timestamp', { precision: 6, withTimezone: true }).primaryKey(),
    energetic: text("energetic").notNull(),
    mainstream: text("mainstream").notNull(),
    vibe: text("vibe").notNull(),
    username: text("username")
        .references(() => users.username, { onDelete: "cascade" }),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertPersona = typeof personas.$inferInsert;
