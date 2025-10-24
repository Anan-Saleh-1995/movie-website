import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Group, Text, Anchor, UnstyledButton, Avatar, Menu,
  Burger, Drawer, Stack, Divider,
  Flex
} from '@mantine/core';
import { signOut } from '@/services/supabase';
import { useAuth } from '@/app/providers/useAuth';

export const Header = () => {
  const { user } = useAuth();
  const [opened, setOpened] = useState(false);

  return (
    <Container size="xl" h={'inherit'}>
      <Group justify="space-between" wrap="nowrap" h={'inherit'}>
        <Flex gap={15}>
          <Anchor component={Link} to="/" underline="never">
            <Text fw={800} fz="lg">Filmify</Text>
          </Anchor>
          <Group gap="sm" visibleFrom="md">
            <Anchor component={Link} to="/movies">Movies</Anchor>
            <Anchor component={Link} to="/tv">TV</Anchor>
            <Anchor component={Link} to="/kids">Kids</Anchor>
            <Anchor component={Link} to="/people">People</Anchor>
            <Anchor component={Link} to="/lists">Lists</Anchor>
            <Anchor component={Link} to="/collections">Collections</Anchor>
            <Anchor component={Link} to="/discover">Discover</Anchor>
          </Group>

        </Flex>

        <Group gap="sm">
          {user ? (
            <Menu shadow="md" width={200} withinPortal>
              <Menu.Target>
                <UnstyledButton>
                  <Group gap={8}>
                    <Avatar radius="xl" size="md" />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown >
                <Menu.Item component={Link} to="/me/profile">Profile</Menu.Item>
                <Menu.Item component={Link} to="/me/watchlist">Watchlist</Menu.Item>
                <Menu.Item onClick={() => signOut()}>Log out</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Anchor component={Link} to="/login" fw={700}>Login</Anchor>
          )}
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} hiddenFrom="md" />
        </Group>
      </Group>

      <Drawer opened={opened} onClose={() => setOpened(false)} hiddenFrom="md">
        <Stack>
          <Anchor component={Link} to="/movies">Movies</Anchor>
          <Anchor component={Link} to="/tv">TV</Anchor>
          <Anchor component={Link} to="/kids">Kids</Anchor>
          <Anchor component={Link} to="/people">People</Anchor>
          <Divider />
          <Anchor component={Link} to="/lists">Lists</Anchor>
          <Anchor component={Link} to="/collections">Collections</Anchor>
          <Anchor component={Link} to="/discover">Discover</Anchor>
        </Stack>
      </Drawer>
    </Container>
  );
};
