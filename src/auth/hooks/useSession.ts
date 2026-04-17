import { useEffect, useState } from 'react';
import { getCurrentUser } from '../services/authService';
import { User } from '../types/auth.types';

export const useSession = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const currentUser = getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // TODO: Integrate with AuthContext
  return { user, loading };
};
