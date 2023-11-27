import { userAuthenticate } from '@tiger-wallet/user';
import { useAuthCookies, COOKIES_SCOPES } from '@tiger-wallet/auth';
import { Request, Response } from 'express';

export const apiUserAuthPost = async (req: Request, res: Response) => {
  const payload = {
    email: req.body?.email,
    password: req.body?.password,
  };

  const result = await userAuthenticate(payload);

  if (result.error) {
    res.status(400).json({
      error: result.error,
      user: null,
    });

    return;
  }

  const { token, options } = useAuthCookies(
    COOKIES_SCOPES.USER.AUTH,
    result.user.id,
  );

  res.cookie('access_token', token, options).json({
    success: 'User logged in successfully',
    user: result.user,
  });
};
