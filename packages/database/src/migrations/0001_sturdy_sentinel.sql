ALTER TABLE "users" ADD COLUMN "uuid" uuid;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_uuid_unique" UNIQUE("uuid");