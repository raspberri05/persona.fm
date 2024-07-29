import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    username: text("username").primaryKey(),
});

export const personas = pgTable("persona", {
    id: serial("id").primaryKey(),
    week: text("week").notNull(),
    persona: text("persona").notNull(),
    username: text("username")
        .notNull()
        .references(() => users.username, { onDelete: "cascade" }),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertPersona = typeof personas.$inferInsert;
