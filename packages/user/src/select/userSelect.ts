import { db, eq, users, IUser } from '@tiger-wallet/database';
import { userSelectPayloadValidation } from './userSelectPayloadValidation';

export type UserSelectPayload = {
  id: string;
};

type UserSelectSuccess = {
  user: Omit<IUser, 'password'>;
  error?: never;
};

type UserSelectError = {
  error: string;
  user?: never;
};

type UserSelectResponse = UserSelectSuccess | UserSelectError;

export const userSelect = async (
  payload: UserSelectPayload,
): Promise<UserSelectResponse> => {
  const payloadIsValid = userSelectPayloadValidation(payload);

  if (payloadIsValid) {
    return {
      error: payloadIsValid,
    };
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, Number(payload.id)),
    columns: {
      password: false,
    },
  });

  if (!user) {
    return {
      error: 'User not found',
    };
  }

  return {
    user,
  };
};
