import { userAuthenticate } from '@tiger-wallet/user';
import { setAuthToken } from '@tiger-wallet/auth';
import { Request, Response } from 'express';

export const apiUserAuthPost = async (req: Request, res: Response) => {
  const payload = {
    email: req.body?.email,
    password: req.body?.password,
  };

  const result = await userAuthenticate(payload);

  if (!result.success) {
    res.status(400).json({
      error: result.error,
      user: null,
    });

    return;
  }

  setAuthToken(res, result.user);

  res.json({
    success: 'User logged in successfully',
    user: result.user,
  });
};
