import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/app/providers/useAuth';

export const AuthLayout = ({ children }: React.PropsWithChildren) => {
  const { user, isLoading, isAdmin } = useAuth();

  if (isLoading) {
    return <p>Loading session…</p>;
  }

  if (user) return <Navigate to={isAdmin ? '/admin' : '/'} replace />;

  return <main style={{ height: '100vh' }}>{children}</main>;
};
