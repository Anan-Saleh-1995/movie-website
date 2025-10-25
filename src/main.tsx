import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Router } from '@/app/router';
import { QueryProvider } from '@/app/providers/QueryProvider';
import { AuthProvider } from '@/app/providers/AuthProvider';

import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <MantineProvider defaultColorScheme='dark'>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </MantineProvider>
    </QueryProvider>
  </StrictMode>,
);
