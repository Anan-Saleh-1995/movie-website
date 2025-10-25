import { useEffect, useState } from 'react';
import { Flex, Stack } from '@mantine/core';
import ReactPlayer from 'react-player';
import { MovieList } from '@/components/movie/MovieList';
import { CreditList } from '@/components/person/CreditList';
import { Details } from '@/components/movie/Details';
import type { CreditsResponse, Movie, videosResponse } from '@/shared/types/movies';

type MovieOverviewProps = {
  movie: Movie | undefined;
  credits: CreditsResponse | undefined;
  videos: videosResponse | undefined;
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
      <CreditList credits={credits} />
      <Details movie={movie} />
    </Flex>
  );
};
