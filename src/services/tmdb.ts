import axios from 'axios';
import type {
  CreditsResponse,
  Movie,
  MoviesResponse,
  videosResponse
} from '@/shared/types/movies';


const baseURL = import.meta.env.VITE_TMDB_API_URL;
const key = import.meta.env.VITE_TMDB_KEY;

export const tmdbClient = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${key}`,
  },
  params: {
    language: 'en-US',
  },
});

export const fetchPopularMovies = async (): Promise<MoviesResponse> => {
  const { data } = await tmdbClient.get<MoviesResponse>('/movie/popular');
  return data;
};

export const fetchTopRated = async (): Promise<MoviesResponse> => {
  const { data } = await tmdbClient.get<MoviesResponse>('/movie/top_rated');
  return data;
};

export const fetchPopularTv = async (): Promise<MoviesResponse> => {
  const { data } = await tmdbClient.get<MoviesResponse>('/tv/popular');
  return data;
};

export const fetchKidsMovies = async (): Promise<MoviesResponse> => {
  const { data } = await tmdbClient.get<MoviesResponse>('/discover/movie?with_genres=10751&certification_country=US&certification.lte=PG');
  return data;
};

export const fetchSimilarMovies = async (movieId?: number): Promise<MoviesResponse> => {
  const { data } = await tmdbClient.get<MoviesResponse>(`/movie/${movieId}/similar`);
  return data;
};

export const fetchRecommendedMovies = async (movieId?: number): Promise<MoviesResponse> => {
  const { data } = await tmdbClient.get<MoviesResponse>(`/movie/${movieId}/recommendations`);
  return data;
};

export const fetchMovieCredits = async (movieId?: number): Promise<CreditsResponse> => {
  const { data } = await tmdbClient.get<CreditsResponse>(`/movie/${movieId}/credits`);
  return data;
};

export const fetchMovieVideos = async (movieId?: number): Promise<videosResponse> => {
  const { data } = await tmdbClient.get<videosResponse>(`/movie/${movieId}/videos`);
  return data;
};

export const fetchMovieById = async (movieId?: number): Promise<Movie> => {
  const { data } = await tmdbClient.get<Movie>(`/movie/${movieId}`);
  return data;
};

export const fetchMoviesByIds = async (movieIds: number[]): Promise<Movie[]> => {
  return Promise.all(movieIds.map((id) => fetchMovieById(id)));
};
