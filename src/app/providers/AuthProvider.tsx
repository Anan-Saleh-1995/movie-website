import { createContext, useEffect, useState, type ReactNode } from 'react';
import { supabase } from '../../services/supabase';
import type { Session, User } from '@supabase/supabase-js';

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setIsLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      session,
      isLoading,
      isAdmin: false,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
