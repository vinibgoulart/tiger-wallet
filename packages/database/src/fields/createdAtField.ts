import { timestamp } from "drizzle-orm/pg-core";

export const createdAtField = {
  createdAt: timestamp('created_at').defaultNow(),
};
