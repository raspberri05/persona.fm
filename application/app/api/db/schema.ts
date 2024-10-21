import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const providers = pgTable("providers", {
    name: text("name").primaryKey(),
});

export const users = pgTable("users", {
    uid: uuid("uid").primaryKey().notNull(),
    provider_type: text("provider_type").references(() => providers.name),
    email: text("email").notNull(),
    full_name: text("full_name").notNull(),
    name: text("name").notNull(),
    picture: text("picture").notNull(),
    provider_username: text("provider_username"),
});

export const personas = pgTable("personas", {
    timestamp: timestamp("timestamp", {
        precision: 6,
        withTimezone: true,
    }).primaryKey(),
    energetic: text("energetic").notNull(),
    mainstream: text("mainstream").notNull(),
    vibe: text("vibe").notNull(),
    uid: uuid("uid").references(() => users.uid),
});

export const groups = pgTable("groups", {
    uid: uuid("uid").primaryKey().notNull(),
    name: text("name").notNull(),
});

export const memberships = pgTable("memberships", {
    uid: uuid("uid").primaryKey().notNull(),
    user_id: uuid("user_id").references(() => users.uid).notNull(),
    group_id: uuid("group_id").references(() => groups.uid).notNull(),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertPersona = typeof personas.$inferInsert;
export type SelectPersona = typeof personas.$inferSelect;

export type InsertGroup = typeof groups.$inferInsert;
export type SelectGroup = typeof groups.$inferSelect;

export type InsertMembership = typeof memberships.$inferSelect;
export type SelectMembership = typeof memberships.$inferInsert;
