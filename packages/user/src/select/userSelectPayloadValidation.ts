import { UserSelectPayload } from './userSelect';

export const userSelectPayloadValidation = (payload: UserSelectPayload) => {
  const { id } = payload;

  if (!id) {
    return 'Id is required';
  }

  return null;
};
