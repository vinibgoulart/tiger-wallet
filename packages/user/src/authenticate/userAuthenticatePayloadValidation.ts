import { UserAuthenticatePayload } from './userAuthenticate';
import validator from 'validator';

export const userAuthenticatePayloadValidation = (
  payload: UserAuthenticatePayload,
) => {
  const { email, password } = payload;

  if (!email) {
    return 'Email is required';
  }

  if (!validator.isEmail(email)) {
    return 'Email is invalid';
  }

  if (!password) {
    return 'Password is required';
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }

  return null;
};
