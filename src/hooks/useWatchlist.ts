import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteMovie, insertMovie, selectWatchlist } from '@/services/supabase';
import { fetchMoviesByIds } from '@/services/tmdb';
import type { Movie } from '@/shared/types/movies';

export const useWatchlist = (userId: string) => {
  return useQuery<Movie[], Error>({
    queryKey: ['userWatchlist', userId] as const,
    queryFn: async () => {
      const ids = await selectWatchlist(userId);
      if (!ids || ids.length === 0) return [];
      return fetchMoviesByIds(ids);
    },
    enabled: !!userId,
    staleTime: 1000 * 60 * 5,
  });
};

export const useAddToWatchlist = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (movieId: number) => insertMovie(userId, movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userWatchlist', userId] as const });
    },
  });
};

export const useRemoveFromWatchlist = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (movieId: number) => deleteMovie(userId, movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userWatchlist', userId] as const });
    },
  });
};
