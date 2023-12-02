import { userSelect } from '@tiger-wallet/user';
import { setAuthToken } from '@tiger-wallet/auth';
import { Request, Response } from 'express';

export const apiUserLogoutPost = async (req: Request, res: Response) => {
  const payload = {
    id: req.user.id,
  };

  const result = await userSelect(payload);

  if (!result.success) {
    res.status(400).json({
      error: result.error,
      user: null,
    });

    return;
  }

  setAuthToken(res, null);

  res.json({
    success: 'User logged out successfully',
  });
};
