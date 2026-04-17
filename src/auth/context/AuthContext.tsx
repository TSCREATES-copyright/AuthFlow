import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/auth.types';
import { login as serviceLogin, signup as serviceSignup, logout as serviceLogout, getCurrentUser } from '../services/authService';

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, username?: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const hydrateSession = () => {
    try {
      const currentUser = getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    hydrateSession();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "app_session_v1") {
        hydrateSession();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    // future hook point (e.g., analytics, logging, feature flags, role system updates)
  }, [user]);

  const login = (email: string, password: string): void => {
    const loggedInUser = serviceLogin(email, password);
    setUser(loggedInUser);
  };

  const signup = (email: string, password: string, username?: string): void => {
    const newUser = serviceSignup(email, password, username);
    setUser(newUser);
  };

  const logout = () => {
    serviceLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
