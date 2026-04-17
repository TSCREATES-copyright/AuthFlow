import { User, Session } from '../types/auth.types';
import { getUsers, saveUsers, getSession, saveSession, clearSession } from './storageService';
import { validateEmail, validatePassword, validateUsername } from './validationService';
import { hashPassword, verifyPassword } from '../../utils/crypto';

export const signup = (email: string, password: string, username?: string): User => {
  const normalizedEmail = email.toLowerCase().trim();
  const normalizedUsername = username?.trim() || undefined;

  const emailErr = validateEmail(normalizedEmail);
  if (emailErr) throw new Error(emailErr);

  const passErr = validatePassword(password);
  if (passErr) throw new Error(passErr);

  const userErr = validateUsername(normalizedUsername);
  if (userErr) throw new Error(userErr);

  const users = getUsers();
  if (users.some(u => u.email === normalizedEmail)) {
    throw new Error("User already exists");
  }

  const newUser: User = {
    id: crypto.randomUUID(),
    email: normalizedEmail,
    passwordHash: hashPassword(password),
    username: normalizedUsername,
    createdAt: Date.now()
  };

  users.push(newUser);
  saveUsers(users);

  const session: Session = {
    userId: newUser.id,
    token: crypto.randomUUID(),
    createdAt: Date.now()
  };
  saveSession(session);

  return newUser;
};

export const login = (email: string, password: string): User => {
  const normalizedEmail = email.toLowerCase().trim();
  const users = getUsers();
  const user = users.find(u => u.email === normalizedEmail);

  if (!user || !verifyPassword(password, user.passwordHash)) {
    throw new Error("Invalid credentials");
  }

  const session: Session = {
    userId: user.id,
    token: crypto.randomUUID(),
    createdAt: Date.now()
  };
  saveSession(session);

  return user;
};

export const logout = (): void => {
  clearSession();
};

export const getCurrentUser = (): User | null => {
  const session = getSession();
  if (!session || !session.userId || !session.token) return null;

  const users = getUsers();
  return users.find(u => u.id === session.userId) || null;
};
