import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function CartButton() {
  const navigate = useNavigate();
  return (
    <button className="hover:scale-125 transition-transform text-4xl max-sm:text-2xl max-sm:dark:bg-primary-dark max-sm:bg-primary-light max-sm:rounded-md w-10 h-10 max-sm:focus:scale-100 max-sm:shadow-md max-sm:border-2 max-sm:border-border-light max-sm:dark:border-border-dark max-sm:text-text-dark">
      <FontAwesomeIcon
        icon={faCartShopping}
        onClick={() => {
          navigate('/cart');
        }}
      />
    </button>
  );
}
