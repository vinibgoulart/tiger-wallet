import { UserCreatePayload } from './userCreate';
import validator from 'validator';

export const userCreatePayloadValidation = (payload: UserCreatePayload) => {
  const { name, email, password } = payload;

  if (!name) {
    return 'Name is required';
  }

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
