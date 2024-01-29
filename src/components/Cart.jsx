import Header from './Header';
import PropTypes from 'prop-types';

export default function Cart({ cart }) {
  return (
    <>
      <Header path={'/'} />
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
};
