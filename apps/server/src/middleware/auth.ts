import { config } from '@tiger-wallet/config';
import { userSelect } from '@tiger-wallet/user';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(403).json({
      error: 'Unauthorized',
    });
  }

  try {
    const data = jwt.verify(token, config.JWT_SECRET!);

    const result = await userSelect({ id: data.id });

    if (!result.success) {
      throw new Error(result.error);
    }

    req.user = result.user;
    return next();
  } catch {
    return res.status(403).json({
      error: 'Unauthorized',
    });
  }
};
