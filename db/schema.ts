import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    username: text("username").notNull().unique().primaryKey(),
});

export const personas = pgTable("personas", {
    timestamp: timestamp("timestamp")
        .notNull()
        .defaultNow()
        .unique()
        .primaryKey(),
    vibe: text("vibe").notNull(),
    mainstream_description: text("mainstream_description").notNull(),
    mainstream_percent: integer("mainstream_percent").notNull(),
    energetic_description: text("energetic_description").notNull(),
    energetic_percent: integer("energetic_percent").notNull(),
    username: text("username")
        .notNull()
        .references(() => users.username, { onDelete: "cascade" }),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertPersona = typeof personas.$inferInsert;
export type SelectPersona = typeof personas.$inferSelect;
