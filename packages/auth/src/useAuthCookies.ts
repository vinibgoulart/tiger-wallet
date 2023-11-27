import jwt from 'jsonwebtoken';
import { config } from '@tiger-wallet/config';

// 1 year
const maxAge = 365 * 24 * 60 * 60 * 100;

export const useAuthCookies = (scope: string, id: number) => {
  const token = jwt.sign({ id, scope }, config.JWT_SECRET!);

  const options = {
    httpOnly: true,
    secure: config.NODE_ENV === 'production',
    maxAge,
  };

  return {
    token,
    options,
  };
};
