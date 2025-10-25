export const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

export const TMDB_IMAGE_SIZES = {
  small: `${TMDB_IMAGE_BASE}/w200`,
  medium: `${TMDB_IMAGE_BASE}/w500`,
  large: `${TMDB_IMAGE_BASE}/w780`,
  original: `${TMDB_IMAGE_BASE}/original`,
} as const;
