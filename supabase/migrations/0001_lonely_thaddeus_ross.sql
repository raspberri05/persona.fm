ALTER TABLE "users" RENAME COLUMN "active_profile" TO "provider";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_active_profile_providers_name_fk";
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "provider" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "provider_username" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_provider_providers_name_fk" FOREIGN KEY ("provider") REFERENCES "public"."providers"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
