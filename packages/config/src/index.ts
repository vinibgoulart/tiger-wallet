import dotenvSafe from 'dotenv-safe';
import path from 'path';

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
  path: root('.env'),
  sample: root('.env.example'),
});

const { API_PORT, POSTGRES_URI, JWT_SECRET, NODE_ENV } = process.env;

export const config = {
  API_PORT,
  POSTGRES_URI,
  JWT_SECRET,
  NODE_ENV,
};
