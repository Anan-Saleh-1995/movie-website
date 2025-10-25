import type { Movie } from '@/shared/types/movies';
import { Card, Grid, Stack, Text, Title } from '@mantine/core';

type detailsProps = {
  movie: Movie | undefined;
};

export const MovieDetails = ({ movie }: detailsProps) => {
  return (
    <Grid gutter="xl">
      <Grid.Col span={12}>
        <Stack gap="sm">
          <Title order={3}>About</Title>
          <Card shadow="sm" radius="md" p="md" withBorder>
            <Stack gap={4}>
              <Text fw={600}>{movie?.title}</Text>
              <Text size="sm" c="dimmed">
                {movie?.genres?.[0].name}
              </Text>
              <Text size="sm">{movie?.overview}</Text>
            </Stack>
          </Card>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <Stack gap="sm">
          <Title order={4}>Information</Title>
          <Stack gap={2}>
            <Text size="sm" fw={600}>
              Status
            </Text>
            <Text size="sm">{movie?.status}</Text>

            <Text size="sm" fw={600} mt="sm">
              Release Date
            </Text>
            <Text size="sm">{movie?.release_date}</Text>

            <Text size="sm" fw={600} mt="sm">
              Run Time
            </Text>
            <Text size="sm">{movie?.runtime}</Text>
          </Stack>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <Stack gap="sm">
          <Title order={4}>Languages</Title>
          <Stack gap={4}>
            <Text size="sm" fw={600}>
              Original Audio
            </Text>
            <Text size="sm">{movie?.spoken_languages?.[0]?.english_name}</Text>

            <Text size="sm" fw={600} mt="sm">
              Audio
            </Text>
            <Text size="sm">{movie?.spoken_languages?.[0]?.english_name}</Text>
          </Stack>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <Stack gap="sm">
          <Title order={4}>Accessibility</Title>
          <Stack gap="sm">
            <Text size="sm" fw={600}>
              CC
            </Text>
            <Text size="sm">Closed captions (CC) refer to subtitles in the available language with the addition of relevant non-dialogue information.</Text>

            <Text size="sm" fw={600} mt="sm">
              AD
            </Text>
            <Text size="sm">Audio descriptions (AD) refer to a narration track describing what is happening on screen.</Text>
          </Stack>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
