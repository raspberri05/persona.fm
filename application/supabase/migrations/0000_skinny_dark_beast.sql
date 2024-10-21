CREATE TABLE IF NOT EXISTS "personas" (
	"timestamp" timestamp (6) with time zone PRIMARY KEY NOT NULL,
	"energetic" text NOT NULL,
	"mainstream" text NOT NULL,
	"vibe" text NOT NULL,
	"uid" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "providers" (
	"name" text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"uid" uuid PRIMARY KEY NOT NULL,
	"active_profile" text NOT NULL,
	"email" text NOT NULL,
	"full_name" text NOT NULL,
	"name" text NOT NULL,
	"picture" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "groups" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" text NOT NULL UNIQUE
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "group_memberships" (
  "user_id" uuid REFERENCES "users"("uid") ON DELETE CASCADE,
  "group_id" uuid REFERENCES "groups"("id") ON DELETE CASCADE,
  PRIMARY KEY ("user_id", "group_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "personas" ADD CONSTRAINT "personas_uid_users_uid_fk" FOREIGN KEY ("uid") REFERENCES "public"."users"("uid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_active_profile_providers_name_fk" FOREIGN KEY ("active_profile") REFERENCES "public"."providers"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
