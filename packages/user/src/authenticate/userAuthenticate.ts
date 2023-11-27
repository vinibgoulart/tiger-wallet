import { db, eq, users, IUser } from '@tiger-wallet/database';
import { userAuthenticatePayloadValidation } from './userAuthenticatePayloadValidation';
import bcrypt from 'bcryptjs';

export type UserAuthenticatePayload = {
  email: string;
  password: string;
};

type UserAuthenticateSuccess = {
  user: Omit<IUser, 'password'>;
  error?: never;
};

type UserAuthenticateError = {
  error: string;
  user?: never;
};

type UserAuthenticateResponse = UserAuthenticateSuccess | UserAuthenticateError;

export const userAuthenticate = async (
  payload: UserAuthenticatePayload,
): Promise<UserAuthenticateResponse> => {
  const payloadIsValid = userAuthenticatePayloadValidation(payload);

  if (payloadIsValid) {
    return {
      error: payloadIsValid,
    };
  }

  const user = await db.query.users.findFirst({
    where: eq(users.email, payload.email),
  });

  if (!user) {
    return {
      error: 'Invalid email or password',
    };
  }

  const isPasswordValid = bcrypt.compareSync(payload.password, user.password);

  if (!isPasswordValid) {
    return {
      error: 'Invalid email or password',
    };
  }

  const { password, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword,
  };
};
