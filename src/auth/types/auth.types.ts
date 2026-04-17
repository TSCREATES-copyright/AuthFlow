export type User = {
  id: string;
  email: string;
  passwordHash: string;
  username?: string;
  createdAt: number;
};

export type Session = {
  userId: string;
  token: string;
  createdAt: number;
};
