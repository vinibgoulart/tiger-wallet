import { db, eq, users, IUser } from '@tiger-wallet/database';
import { userCreatePayloadValidation } from './userCreatePayloadValidation';
import bcrypt from 'bcryptjs';

export type UserCreatePayload = {
  name: string;
  email: string;
  password: string;
};

type UserCreateSuccess = {
  user: IUser;
  error?: never;
};

type UserCreateError = {
  error: string;
  user?: never;
};

type UserCreateResponse = UserCreateSuccess | UserCreateError;

export const userCreate = async (
  payload: UserCreatePayload,
): Promise<UserCreateResponse> => {
  const payloadIsValid = userCreatePayloadValidation(payload);

  if (payloadIsValid) {
    return {
      error: payloadIsValid,
    };
  }

  const userExistent = await db.query.users.findFirst({
    where: eq(users.email, payload.email),
  });

  if (userExistent) {
    return {
      error: 'User with this email already exists',
    };
  }

  const { password, ...rest } = payload;

  const values = {
    ...rest,
    password: bcrypt.hashSync(password),
  };

  const [user] = await db.insert(users).values(values).returning();

  return {
    user,
  };
};
