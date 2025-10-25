import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import { Router } from '@/app/router';
import { QueryProvider } from '@/app/providers/QueryProvider';
import { AuthProvider } from '@/app/providers/AuthProvider';

import '@mantine/core/styles.css';

const theme = createTheme({
  cursorType: 'pointer',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <MantineProvider theme={theme} defaultColorScheme='auto'>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </MantineProvider>
    </QueryProvider>
  </StrictMode>,
);
