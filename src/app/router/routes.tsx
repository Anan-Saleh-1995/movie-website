import { AuthLayout } from '@/app/layouts/AuthLayout';
import { AuthPanel } from '@/components/auth/AuthPanel';
import { UserLayout } from '@/app/layouts/UserLayout';
import { HomePage } from '@/app/pages/HomePage';

export const routes = [
  {
    path: '/login',
    element: AuthPanel,
    layout: AuthLayout,
  },
  {
    path: '/register',
    element: AuthPanel,
    layout: AuthLayout,
  },
  {
    path: '/',
    element: HomePage,
    layout: UserLayout,
  },
];
