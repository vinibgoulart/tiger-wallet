import { db, eq, users, IUser } from '@tiger-wallet/database';
import { userSelectPayloadValidation } from './userSelectPayloadValidation';

export type UserSelectPayload = {
  id: string | number;
};

type UserSelectSuccess = {
  success: true;
  user: Omit<IUser, 'password'>;
};

type UserSelectError = {
  success: false;
  error: string;
};

type UserSelectResponse = UserSelectSuccess | UserSelectError;

export const userSelect = async (
  payload: UserSelectPayload,
): Promise<UserSelectResponse> => {
  const payloadIsValid = userSelectPayloadValidation(payload);

  if (payloadIsValid) {
    return {
      success: false,
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
      success: false,
      error: 'User not found',
    };
  }

  return {
    success: true,
    user,
  };
};
