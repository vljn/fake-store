import PropTypes from 'prop-types';
import CartItem from './CartItem';

export default function CartItems({ items, deleteHandler, deleteAllHandler }) {
  return (
    <div className="mx-8 sm:mx-12">
      {items.length > 0 && (
        <button
          className="bg-red-700 border-2 border-red-900 rounded px-3 py-1 hover:bg-red-800 font-bold text-lg mb-2 transition-colors text-text-dark"
          onClick={deleteAllHandler}
        >
          Empty cart
        </button>
      )}
      {items.map((item) => (
        <CartItem key={item.id} item={item} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
}

CartItems.propTypes = {
  items: PropTypes.array,
  deleteHandler: PropTypes.func,
  deleteAllHandler: PropTypes.func,
};
