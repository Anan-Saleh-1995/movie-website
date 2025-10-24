import { type JSX } from 'react';
import { useHover } from '@mantine/hooks';
import { Card, Image, Overlay, Flex } from '@mantine/core';
import type { Movie } from '@/shared/types/movies';

import './MovieCard.css';

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps): JSX.Element => {
  const { hovered, ref } = useHover();
  return (
    <Card
      padding={0}
      shadow={'lg'}
      radius={'lg'}
      ref={ref}
    >
      <Flex>
        <Image
          src={movie.poster_path ? TMDB_IMAGE_BASE + movie.poster_path : ''}
          fit="cover"
          alt={movie.title}
        />
        {hovered && <Overlay color="#000" backgroundOpacity={0.4} />}
      </Flex>
    </Card>
  );
};
