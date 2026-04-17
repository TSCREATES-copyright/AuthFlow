import { User, Session } from '../types/auth.types';

const USERS_KEY = "app_users_v1";
const SESSION_KEY = "app_session_v1";

export const getUsers = (): User[] => {
  try {
    const data = localStorage.getItem(USERS_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

export const saveUsers = (users: User[]): void => {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    // Safely ignore
  }
};

export const getSession = (): Session | null => {
  try {
    const data = localStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
};

export const saveSession = (session: Session): void => {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch (error) {
    // Safely ignore
  }
};

export const clearSession = (): void => {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (error) {
    // Safely ignore
  }
};

export const clearAllAuth = (): void => {
  try {
    localStorage.removeItem(USERS_KEY);
    localStorage.removeItem(SESSION_KEY);
  } catch (error) {
    // Safely ignore
  }
};
