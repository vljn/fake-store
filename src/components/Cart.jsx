import Header from './Header';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Error from './Error';
import CartItems from './CartItems';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart({ cart }) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setStatus('loading');
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setStatus('success');
        setItems(
          cart.cart.map((cartItem) => {
            const matching = response.data.find((item) => item.id === cartItem.id);

            if (matching) {
              return {
                ...cartItem,
                ...matching,
              };
            }
            return cartItem;
          })
        );
      } catch (err) {
        setStatus('error');
        setError(err);
      }
    };
    fetch();
  }, [cart.cart]);

  function deleteHandler(id) {
    cart.removeItem(id);
  }

  function deleteAllHandler() {
    cart.emptyCart();
  }

  return (
    <>
      <Header path={'/'} />

      {status === 'loading' && <Loading />}
      {status === 'error' && <Error message={error.message} />}
      {status === 'success' && (
        <CartItems
          items={items}
          deleteHandler={deleteHandler}
          deleteAllHandler={deleteAllHandler}
        />
      )}
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
};
