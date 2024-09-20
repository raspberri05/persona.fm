CREATE TABLE IF NOT EXISTS "personas" (
	"timestamp" timestamp (6) with time zone PRIMARY KEY NOT NULL,
	"energetic" text NOT NULL,
	"mainstream" text NOT NULL,
	"vibe" text NOT NULL,
	"username" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"username" text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "personas" ADD CONSTRAINT "personas_username_users_username_fk" FOREIGN KEY ("username") REFERENCES "public"."users"("username") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
