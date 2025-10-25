import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import {
  fetchKidsMovies,
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieVideos,
  fetchPopularMovies,
  fetchPopularTv,
  fetchRecommendedMovies,
  fetchSimilarMovies,
  fetchTopRated
} from '@/services/tmdb';
import type {
  Movie,
  MoviesResponse,
  videosResponse
} from '@/shared/types/movies';
import type { CreditsResponse } from '@/shared/types/person';


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

export const useSimilarMovies = (id?: number): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['similarMovies', id] as const,
    queryFn: ({ queryKey }) => {
      const [, movieId] = queryKey;
      return fetchSimilarMovies(movieId);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const useRecommendedMovies = (id?: number): UseQueryResult<MoviesResponse, Error> => {
  return useQuery({
    queryKey: ['recommednedMovies', id] as const,
    queryFn: ({ queryKey }) => {
      const [, movieId] = queryKey;
      return fetchRecommendedMovies(movieId);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const useMovieCredits = (id?: number): UseQueryResult<CreditsResponse, Error> => {
  return useQuery({
    queryKey: ['movieCredits', id] as const,
    queryFn: ({ queryKey }) => {
      const [, movieId] = queryKey;
      return fetchMovieCredits(movieId);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const useMovieVideos = (id?: number): UseQueryResult<videosResponse, Error> => {
  return useQuery({
    queryKey: ['movieVideos', id] as const,
    queryFn: ({ queryKey }) => {
      const [, movieId] = queryKey;
      return fetchMovieVideos(movieId);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export const useMovieById = (id?: number): UseQueryResult<Movie, Error> => {
  return useQuery({
    queryKey: ['movieById', id] as const,
    queryFn: ({ queryKey }) => {
      const [, movieId] = queryKey;
      return fetchMovieById(movieId);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
