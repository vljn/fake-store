import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { useEffect, useRef, useState } from 'react';

export default function Item({ id, image, title, price, cart }) {
  const navigate = useNavigate();
  const [animation, setAnimation] = useState(false);
  const [canAddToCart, setCanAddToCart] = useState(true);
  const ref = useRef(null);

  let cartIconClass;
  if (animation) {
    cartIconClass = ' animate__lightSpeedOutRight';
  } else {
    cartIconClass = ' animate__lightSpeedInLeft';
  }

  useEffect(() => {
    if (animation) {
      const handleAnimationEnd = () => {
        setAnimation(false);
        setCanAddToCart(true);
      };
      const element = ref?.current;
      element.addEventListener('animationend', handleAnimationEnd);

      return () => {
        element.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [animation]);

  const handleItemClick = () => {
    navigate('/items/' + id);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (canAddToCart) {
      cart.addItem(id, 1);
      setAnimation(true);
      setCanAddToCart(false);
    }
  };

  return (
    <div
      className="dark:bg-foreground-dark border-2 bg-foreground-light dark:border-border-dark border-border-light rounded-xl hover:scale-[105%] hover:shadow-[0px_0px_25px_0px_rgba(25,24,27,0.5)] transition-[shadow_transform] dark:hover:shadow-[0px_0px_25px_-5px_rgba(239,239,241,0.5)] items-center flex mb-10 overflow-hidden lg:flex-col lg:m-0 cursor-pointer lg:rounded-2xl lg:items-start group lg:justify-between"
      onClick={handleItemClick}
    >
      <img
        src={image}
        alt=""
        className="max-lg:h-20 max-lg:w-20  flex-shrink-0 object-cover mr-2 lg:m-0 lg:w-full object-top l lg:h-60 lg:hover:object-scale-down lg:transition-transform lg:border-b-2 border-b-primary-light dark:border-b-primary-dark"
        onClick={() => {
          navigate('/items/' + id);
        }}
      />
      <div className="flex items-center justify-between w-full max-lg:h-full lg:px-6 lg:py-6 lg:items-end">
        <div onClick={handleItemClick}>
          <h2 className="text-sm max-lg:line-clamp-2 overflow-hidden sm:text-base md:text-xl">
            {title}
          </h2>
        </div>
        <button
          className="bg-primary-light dark:bg-primary-dark flex flex-col max-sm:gap-2 items-center justify-center min-w-20 h-20 flex-shrink-0 ml-2 box-border sm:min-w-24 md:min-w-28 lg:rounded-xl  lg:hover:border-2 lg:hover:border-border-dark dark:hover:border-border-light text-text-dark lg:ml-4"
          onClick={handleAddToCart}
        >
          <h2 className="sm:text-xl md:text-2xl">{price}$</h2>
          <FontAwesomeIcon
            className={'sm:text-xl md:text-2xl animate__animated animate__faster' + cartIconClass}
            icon={faCartShopping}
            ref={ref}
          />
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  cart: PropTypes.object,
};
