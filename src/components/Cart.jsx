import Header from './Header';
import PropTypes from 'prop-types';

export default function Cart({ cart }) {
  return (
    <>
      <Header path={'/'} />
      <div>
        {cart.cart.map((item) => (
          <div key={item.id}>
            {item.id}, quantity: {item.quantity}
          </div>
        ))}
      </div>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
};
