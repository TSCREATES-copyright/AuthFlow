import { authConfig } from '../../config/auth.config';

export const validateEmail = (email?: string): string | null => {
  if (!email || !email.includes("@")) {
    return "Email is invalid";
  }
  return null;
};

export const validatePassword = (password?: string): string | null => {
  if (!password || password.length < authConfig.validation.minPasswordLength) {
    return `Password must be at least ${authConfig.validation.minPasswordLength} characters`;
  }
  return null;
};

export const validateUsername = (username?: string): string | null => {
  if (username !== undefined && username !== "" && username.length < authConfig.validation.minUsernameLength) {
    return `Username must be at least ${authConfig.validation.minUsernameLength} characters`;
  }
  return null;
};
