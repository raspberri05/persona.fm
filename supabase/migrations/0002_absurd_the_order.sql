ALTER TABLE "users" RENAME COLUMN "provider" TO "provider_type";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_provider_providers_name_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_provider_type_providers_name_fk" FOREIGN KEY ("provider_type") REFERENCES "public"."providers"("name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
