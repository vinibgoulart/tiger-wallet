import { db, eq, users, IUser } from '@tiger-wallet/database';
import { userAuthenticatePayloadValidation } from './userAuthenticatePayloadValidation';
import bcrypt from 'bcryptjs';

export type UserAuthenticatePayload = {
  email: string;
  password: string;
};

type UserAuthenticateSuccess = {
  success: true;
  user: Omit<IUser, 'password'>;
};

type UserAuthenticateError = {
  success: false;
  error: string;
};

type UserAuthenticateResponse = UserAuthenticateSuccess | UserAuthenticateError;

export const userAuthenticate = async (
  payload: UserAuthenticatePayload,
): Promise<UserAuthenticateResponse> => {
  const payloadIsValid = userAuthenticatePayloadValidation(payload);

  if (payloadIsValid) {
    return {
      success: false,
      error: payloadIsValid,
    };
  }

  const user = await db.query.users.findFirst({
    where: eq(users.email, payload.email),
  });

  if (!user) {
    return {
      success: false,
      error: 'Invalid email or password',
    };
  }

  const isPasswordValid = bcrypt.compareSync(payload.password, user.password);

  if (!isPasswordValid) {
    return {
      success: false,
      error: 'Invalid email or password',
    };
  }

  const { password, ...userWithoutPassword } = user;

  return {
    success: true,
    user: userWithoutPassword,
  };
};
