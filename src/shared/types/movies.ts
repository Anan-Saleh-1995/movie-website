import type { MOVIE_TO_WATCH } from '@/shared/constants/movies';

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  genres: [{ id: number, name: string }]
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number,
  status: string,
  spoken_languages: [{ english_name: string, name: string }],
  homepage: string,
};

export type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type videos = {
  key: string;
  type: string;
};

export type videosResponse = {
  id: number;
  results: videos[];
};

export type MovieToWatch = typeof MOVIE_TO_WATCH[keyof typeof MOVIE_TO_WATCH];
