import useFetch from 'react-fetch-hook';
import Header from './Header';
import ItemsList from './ItemsList';
import PropTypes from 'prop-types';
import Loading from './Loading';

export default function Items({ cart }) {
  const { isLoading, data, error } = useFetch('https://fakestoreapi.com/products');

  if (isLoading) {
    return (
      <>
        <Header path="/" />
        <Loading />
      </>
    );
  }

  if (error) {
    console.error(error);
    return (
      <>
        <Header path="/" />
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
