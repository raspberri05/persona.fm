import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull(),
});

export const personas = pgTable("persona", {
    id: serial("id").primaryKey(),
    week: text("week").notNull(),
    persona: text("persona").notNull(),
    user_id: integer("user_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertPersona = typeof personas.$inferInsert;
