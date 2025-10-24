import { useMutation } from '@tanstack/react-query';
import { signIn, signOut, signUp } from '@/services/supabase';

export const useSignIn = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signIn(email, password),
  });
};

export const useSignOut = () => {
  return useMutation({ mutationFn: signOut });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signUp(email, password),
  });
};
