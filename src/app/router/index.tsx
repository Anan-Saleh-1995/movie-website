import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '@/app/router/routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element: Element, layout: Layout }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Element />
              </Layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
