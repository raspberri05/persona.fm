CREATE TABLE IF NOT EXISTS "groups" (
	"uid" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "memberships" (
	"uid" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"group_id" uuid NOT NULL
);
--> statement-breakpoint
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
	"provider_type" text,
	"email" text NOT NULL,
	"full_name" text NOT NULL,
	"name" text NOT NULL,
	"picture" text NOT NULL,
	"provider_username" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "memberships" ADD CONSTRAINT "memberships_user_id_users_uid_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("uid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "memberships" ADD CONSTRAINT "memberships_group_id_groups_uid_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("uid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "personas" ADD CONSTRAINT "personas_uid_users_uid_fk" FOREIGN KEY ("uid") REFERENCES "public"."users"("uid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_provider_type_providers_name_fk" FOREIGN KEY ("provider_type") REFERENCES "public"."providers"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
