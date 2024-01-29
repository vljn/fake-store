import useFetch from '../hooks/useFetch';
import Header from './Header';
import ItemsList from './ItemsList';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Error from './Error';

export default function Items({ cart }) {
  const { status, data, error } = useFetch('https://fakestoreapi.com/products');

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
