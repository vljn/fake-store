import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Item({ image, title, description, price }) {
  return (
    <div className="dark:bg-foreground-dark border-2 bg-foreground-light dark:border-border-dark border-border-light rounded-xl hover:scale-[105%] hover:shadow-[0px_0px_25px_0px_rgba(25,24,27,0.5)] transition-[shadow_transform] dark:hover:shadow-[0px_0px_25px_-5px_rgba(239,239,241,0.5)] items-center flex mb-10 overflow-hidden lg:flex-col lg:m-0 cursor-pointer lg:rounded-2xl lg:items-start group lg:justify-between">
      <img
        src={image}
        alt=""
        className="max-lg:h-20 max-lg:w-20 object-cover flex-shrink-1 mr-2 lg:m-0 lg:w-full object-top l lg:h-60 lg:hover:object-scale-down lg:transition-transform lg:border-b-2 border-b-primary-light dark:border-b-primary-dark"
      />
      <div className="flex items-center justify-between w-full max-lg:h-full lg:px-6 lg:py-6 lg:items-end lg:flex-grow-2">
        <div className="">
          <h2 className="text-sm max-lg:line-clamp-2 overflow-hidden sm:text-base md:text-xl">
            {title}
          </h2>
          <div className="line-clamp-2 max-lg:hidden">{description}</div>
        </div>
        <div className="bg-primary-light dark:bg-primary-dark flex flex-col items-center justify-center min-w-20 h-20 flex-shrink-0 ml-2 box-border sm:min-w-24 md:min-w-28 lg:rounded-xl  hover:border-2 hover:border-border-dark dark:hover:border-border-light text-text-dark lg:ml-4">
          <h2 className="sm:text-xl md:text-2xl">{price}$</h2>
          <button className="sm:text-xl md:text-2xl">
            <FontAwesomeIcon className="" icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};
