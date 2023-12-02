import { COOKIES_SCOPES } from './cookieScopes';
import { useAuthCookies } from './useAuthCookies';
import type { IUser } from '@tiger-wallet/database';

export const setAuthToken = (
  res: unknown,
  user: Omit<IUser, 'password'> | null,
) => {
  if (!user) {
    res.clearCookie('access_token');
    return;
  }

  const { token, options } = useAuthCookies(COOKIES_SCOPES.USER.AUTH, user.id);

  res.cookie('access_token', token, options);
};
