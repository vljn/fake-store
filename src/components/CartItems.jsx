import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default function CartItems({ items, deleteHandler }) {
  return (
    <>
      {items.map((item) => (
        <CartItem key={item.id} item={item} deleteHandler={deleteHandler} />
      ))}
    </>
  );
}

CartItems.propTypes = {
  items: PropTypes.array,
  deleteHandler: PropTypes.func,
};
