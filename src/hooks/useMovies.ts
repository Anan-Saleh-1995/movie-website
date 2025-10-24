import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { MoviesResponse } from '../shared/types/movies';
import { fetchKidsMovies, fetchPopularMovies, fetchPopularTv, fetchTopRated } from '../services/tmdb';

export const usePopularMovies = (): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
    staleTime: 1000 * 60 * 5,
  });
};

export const useTopRated = (): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['topRated'],
    queryFn: fetchTopRated,
    staleTime: 1000 * 60 * 5,
  });
};

export const usePopularTv = (): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['popularTv'],
    queryFn: fetchPopularTv,
    staleTime: 1000 * 60 * 5,
  });
};

export const useKidsMovies = (): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['kidsMovies'],
    queryFn: fetchKidsMovies,
    staleTime: 1000 * 60 * 5,
  });
};
