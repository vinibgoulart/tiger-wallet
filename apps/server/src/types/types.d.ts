import { IUser } from '@tiger-wallet/database';

declare global {
  namespace Express {
    interface Request {
      user: Omit<IUser, 'password'>;
    }
  }
}
