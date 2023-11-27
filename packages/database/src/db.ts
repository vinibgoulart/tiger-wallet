import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { config } from '@tiger-wallet/config';
import * as schema from './schema';

const pool = new Pool({
  connectionString: config.POSTGRES_URI,
});

export const db = drizzle(pool, { schema });
