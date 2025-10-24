import { Container, Group, Text, Divider } from '@mantine/core';

export const Footer = () => {
  return (
    <Container size={'xl'} py="xl">
      <Divider my="lg" />

      <Group justify="space-between">
        <Text size="xs" c="dimmed">© 2025 Filmify – All rights reserved</Text>
        <Text size="xs" c="dimmed">Made for movie lovers 🎥</Text>
      </Group>
    </Container>
  );
};
