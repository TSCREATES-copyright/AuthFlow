export const hashPassword = (password: string): string => {
  return btoa("app_salt_" + password);
};

export const verifyPassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};
