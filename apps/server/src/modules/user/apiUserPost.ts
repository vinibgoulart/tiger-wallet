import { userCreate } from '@tiger-wallet/user';
import { Request, Response } from 'express';

export const apiUserPost = async (req: Request, res: Response) => {
  const payload = {
    name: req.body?.name,
    email: req.body?.email,
    password: req.body?.password,
  };

  const result = await userCreate(payload);

  if (result.error) {
    res.status(400).json({
      error: result.error,
      user: null,
    });

    return;
  }

  res.json({
    success: 'User created successfully',
    user: result.user,
  });
};
