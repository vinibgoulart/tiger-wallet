import { Request } from 'express';

export const viewerCanSee = (req: Request, id: string) => {
  if (req.user.id !== Number(id) && req.user.uuid !== id) {
    return false;
  }

  return true;
};
