import PropTypes from 'prop-types';
import CartItem from './CartItem';
import 'animate.css';

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
      {items.length ? (
        items.map((item) => <CartItem key={item.id} item={item} deleteHandler={deleteHandler} />)
      ) : (
        <h1 className="mt-6 text-center text-3xl sm:text-5xl md:text-6xl text-primary-light dark:text-primary-dark after:content-[':('] after:pl-6 after:text-nowrap animate__animated animate__fadeInDown">
          your cart is empty
        </h1>
      )}
    </div>
  );
}

CartItems.propTypes = {
  items: PropTypes.array,
  deleteHandler: PropTypes.func,
  deleteAllHandler: PropTypes.func,
};
