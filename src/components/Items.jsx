import Header from './Header';
import ItemsList from './ItemsList';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Error from './Error';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Items({ cart }) {
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setStatus('loading');
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setStatus('success');
        setData(response.data);
      } catch (err) {
        setStatus('error');
        setError(err);
      }
    };
    fetch();
  }, []);

  if (status === 'loading') {
    return (
      <>
        <Header path="/" />
        <Loading />
      </>
    );
  }

  if (status === 'error') {
    return (
      <>
        <Header path="/" />
        <Error message={error.message} />
      </>
    );
  }

  return (
    <>
      <Header path="/" />
      <ItemsList items={data} cart={cart} />
    </>
  );
}

Items.propTypes = {
  cart: PropTypes.object,
};
