import { useEffect, useState } from 'react';
import { Flex, Stack } from '@mantine/core';
import ReactPlayer from 'react-player';
import { MovieList } from '@/components/movie/MovieList';
import { PersonCreditList } from '@/components/person/PersonCreditList';
import { MovieDetails } from '@/components/movie/MovieDetails';
import type { Movie, VideosResponse } from '@/shared/types/movies';
import type { CreditsResponse } from '@/shared/types/person';

type MovieOverviewProps = {
  movie: Movie | undefined;
  credits: CreditsResponse | undefined;
  videos: VideosResponse | undefined;
  recommended: Movie[];
  similar: Movie[];
};

export const MovieOverview = ({ movie, credits, videos, recommended, similar }: MovieOverviewProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const trailerId = videos?.results?.find((v) => v.type === 'Trailer')?.key;

  useEffect(() => {
    const t = setTimeout(() => setIsPlaying(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Flex direction={'column'} gap={20}>
      <Flex>
        <ReactPlayer
          src={`https://www.youtube.com/watch?v=${trailerId}`}
          controls
          width="100%"
          height="600px"
          muted
          playing={isPlaying}
        />
      </Flex>
      <Stack>
        <MovieList movies={recommended} title="Recommended" />
        <MovieList movies={similar} title="Similar" />
      </Stack>
      <PersonCreditList credits={credits} />
      <MovieDetails movie={movie} />
    </Flex>
  );
};
