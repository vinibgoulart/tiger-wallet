import { serial, uuid } from 'drizzle-orm/pg-core';

export const idField = {
  id: serial('id').primaryKey(),
  uuid: uuid('uuid').defaultRandom().unique()
};
