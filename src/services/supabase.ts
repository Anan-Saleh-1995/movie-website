import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  return true;
};

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const insertMovie = async (userId: string, movieId: string) => {
  const { data } = await supabase
    .from('watchlist')
    .insert({ user_id: userId, movie_id: movieId })
    .select();

  return data;
};

export const deleteMovie = async (userId: string, movieId: string) => {
  const { data } = await supabase
    .from('watchlist')
    .delete()
    .eq('user_id', userId)
    .eq('movie_id', movieId);

  return data;
};

export const selectWatchlist = async (userId: string) => {
  const { data } = await supabase
    .from('watchlist')
    .select('movie_id')
    .eq('user_id', userId);

  return data?.map((row) => row.movie_id);
};
