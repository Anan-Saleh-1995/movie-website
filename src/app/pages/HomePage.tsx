import { Center, Loader, Stack } from '@mantine/core';
import { useKidsMovies, usePopularMovies, usePopularTv, useTopRated } from '@/hooks/useMovies';
import { MovieList } from '@/components/movie/MovieList';


export const HomePage = () => {
  const { data: popularMovies, isLoading: isPopularMoviesLoading } = usePopularMovies();
  const { data: topRatedMovies, isLoading: isTopRatedLoading } = useTopRated();
  const { data: popularTv, isLoading: isPopularTvLoading } = usePopularTv();
  const { data: kidsMovies, isLoading: isKidsMoviesLoading } = useKidsMovies();
  const isLoading = [isPopularMoviesLoading, isTopRatedLoading, isPopularTvLoading, isKidsMoviesLoading].some(Boolean);

  if (isLoading) {
    return (
      <Center style={{ height: '100vh' }}>
        <Loader size="xl" />
      </Center>
    );
  } else {
    return (
      <Stack gap={'lg'}>
        <MovieList title="Popular Movies" movies={popularMovies?.results ?? []} />
        <MovieList title="Top Rated" movies={topRatedMovies?.results ?? []} />
        <MovieList title="TV Shows" movies={popularTv?.results ?? []} />
        <MovieList title="Kids Movies" movies={kidsMovies?.results ?? []} />
      </Stack>
    );
  }

};
