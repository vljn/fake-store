import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Items from './Items';
import SingleItem from './SingleItem';

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
    {
      path: 'items',
      element: <Items />,
    },
    {
      path: 'items/:id',
      element: <SingleItem />,
    },
  ]);

  return <RouterProvider router={router} />;
}
