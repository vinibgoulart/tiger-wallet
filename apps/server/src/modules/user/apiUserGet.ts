import { userSelect } from '@tiger-wallet/user';
import { Request, Response } from 'express';
import { viewerCanSee } from './viewerCanSee';

export const apiUserGet = async (req: Request, res: Response) => {
  if (!viewerCanSee(req, req.params?.id)) {
    res.status(403).json({
      error: 'Unauthorized',
    });

    return;
  }

  const payload = {
    id: req.params?.id,
  };

  const result = await userSelect(payload);

  if (result.error) {
    res.status(400).json({
      error: result.error,
      user: null,
    });

    return;
  }

  res.json({
    success: 'User found successfully',
    user: result.user,
  });
};
