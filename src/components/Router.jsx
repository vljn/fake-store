import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Items from './Items';
import SingleItem from './SingleItem';
import Cart from './Cart';
import PropTypes from 'prop-types';

export default function Router({ cart }) {
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
      element: <Items cart={cart} />,
    },
    {
      path: 'items/:id',
      element: <SingleItem cart={cart} />,
    },
    { path: 'cart', element: <Cart cart={cart} /> },
  ]);

  return <RouterProvider router={router} />;
}

Router.propTypes = {
  cart: PropTypes.object,
};
