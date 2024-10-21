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
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull().unique(),
});

export const groupMemberships = pgTable("group_memberships", {
    userId: uuid("user_id").references(() => users.uid).notNull(),
    groupId: uuid("group_id").references(() => groups.id).notNull(),
}, (table: { userId: any; groupId: any; }) => ({
    pk: primaryKey(table.userId, table.groupId),
}));

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertPersona = typeof personas.$inferInsert;
function primaryKey(userId: any, groupId: any) {
    throw new Error("Function not implemented.");
}

