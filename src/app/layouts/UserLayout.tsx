import type { ReactNode } from 'react';
import { AppShell, Container } from '@mantine/core';
import { Header } from '@/app/layouts/components/Header';
import { Footer } from '@/app/layouts/components/Footer';

export const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Container size="xl">{children}</Container>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};
