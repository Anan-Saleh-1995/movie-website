import type { JSX } from 'react';
import { Button, Flex, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { MovieCard } from '@/components/movie/MovieCard';
import type { Movie } from '@/shared/types/movies';

import '@mantine/carousel/styles.css';

type MovieListProps = {
  title: string;
  movies: Movie[];
};

export const MovieList = ({ title, movies } : MovieListProps): JSX.Element => {
  return (
    <Flex direction={'column'}>
      <Flex wrap={'nowrap'} align="center" justify="flex-start" mb="md">
        <Button
          component="a"
          href="#"
          variant="transparent"
          size="xs"
          px="xs"
        >
          <Title order={2} fw={700} style={{ lineHeight: 1 }}>
            {title}
          </Title>
          <ChevronRightIcon style={{ width: 18, height: 18, marginTop: 5 }} />
        </Button>
      </Flex>
      <Carousel
        emblaOptions={{
          dragFree: true,
          align: 'start',
        }}
        slideGap="md"
        styles={{
          control: {
            backgroundColor: 'black',
            color: 'yellow',
            width: '50px',
            height: '50px',
          }
        }}
      >
        {movies?.map((movie) => (
          <Carousel.Slide w={180} maw={180} key={movie.id}>
            <MovieCard movie={movie} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
};
