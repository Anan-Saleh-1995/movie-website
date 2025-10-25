import { useParams } from 'react-router-dom';
import { Center, Loader } from '@mantine/core';
import { useMovieById, useMovieCredits, useMovieVideos, useRecommendedMovies, useSimilarMovies } from '@/hooks/useMovies';
import { MovieOverview } from '@/components/movie/MovieOverView';

export const MovieContainer = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = id ? parseInt(id, 10) : undefined;

  const movieById = useMovieById(movieId);
  const similar = useSimilarMovies(movieId);
  const recommended = useRecommendedMovies(movieId);
  const credits = useMovieCredits(movieId);
  const videos = useMovieVideos(movieId);

  const isLoading = [movieById, similar, recommended, credits, videos].some((q) => q.isLoading);

  if (isLoading) {
    return (
      <Center style={{ height: '100vh' }}>
        <Loader size="xl" />
      </Center>
    );
  }

  return (
    <MovieOverview
      movie={movieById.data}
      credits={credits.data}
      videos={videos.data}
      recommended={recommended.data?.results ?? []}
      similar={similar.data?.results ?? []}
    />
  );
};
