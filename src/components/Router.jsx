import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
