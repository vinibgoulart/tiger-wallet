import { pgTable, text } from 'drizzle-orm/pg-core';
import { createdAtField, idField } from './fields';
import { InferSelectModel } from 'drizzle-orm';

export const users = pgTable('users', {
  ...idField,
  ...createdAtField,
  name: text('name'),
  email: text('email').unique(),
  password: text('password'),
});

export type IUser = InferSelectModel<typeof users>;