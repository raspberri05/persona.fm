CREATE TABLE IF NOT EXISTS "personas" (
	"timestamp" timestamp PRIMARY KEY DEFAULT now() NOT NULL,
	"vibe" text NOT NULL,
	"mainstream_description" text NOT NULL,
	"mainstream_percent" integer NOT NULL,
	"energetic_description" text NOT NULL,
	"energetic_percent" integer NOT NULL,
	"username" text NOT NULL,
	CONSTRAINT "personas_timestamp_unique" UNIQUE("timestamp")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"username" text PRIMARY KEY NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "personas" ADD CONSTRAINT "personas_username_users_username_fk" FOREIGN KEY ("username") REFERENCES "public"."users"("username") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
