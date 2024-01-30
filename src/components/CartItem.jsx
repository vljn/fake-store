import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function CartItem({ item, deleteHandler }) {
  return (
    <div className="sm:flex sm:items-center border-b-2 border-border-light dark:border-border-dark py-4 last:border-none relative">
      <div className="w-32 h-32 sm:flex-shrink-0 border-4 border-primary-light rounded-[0.625rem] overflow-hidden p-1">
        <img src={item.image} className="w-full h-full object-cover object-top rounded-md" />
      </div>
      <button
        className="absolute right-0 top-4 rounded-lg text-xl w-8 h-8 bg-red-700 border-2 border-red-900 text-text-dark hover:scale-110 transition-transform"
        onClick={() => deleteHandler(item.id)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <div className="sm:ml-5 max-sm:mt-2 sm:flex-1 ">
        <Link to={'/items/' + item.id}>
          <h1 className="line-clamp-3 text-xl">{item.title}</h1>
        </Link>
      </div>
      <div className="sm:ml-5 sm:mt-3 text-right">
        <h1 className="font-bold text-xl my-2">{item.price}$</h1>
        <h1 className="text-lg">qt: {item.quantity}</h1>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
  deleteHandler: PropTypes.func,
};
