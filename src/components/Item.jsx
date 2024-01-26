import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Item({ image, title, description, price }) {
  return (
    <div className="flex flex-col w-full px-6 py-6 rounded-3xl gap-6 bg-foreground-light dark:bg-foreground-dark border-4 border-border-light dark:border-border-dark justify-between cursor-pointer hover:scale-[105%] hover:shadow-[0px_0px_25px_0px_rgba(25,24,27,0.5)] transition-[shadow_transform] duration-500 dark:hover:shadow-[0px_0px_25px_-5px_rgba(239,239,241,0.5)]">
      <img src={image} alt="" className="h-48 self-center rounded-2xl" />
      <div className="flex flex-col justify-between grow">
        <div>
          <h2 className="text-4xl">{title}</h2>
          <div className="truncate mb-4 mt-2">{description}</div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl">{price}$</h2>
          <button className="bg-primary-light dark:bg-primary-dark rounded-lg p-3 flex items-center justify-center group text-2xl">
            <FontAwesomeIcon
              className="group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-x-[1px] group-hover:translate-y-[1px] transition-transform text-primary-content"
              icon={faCartShopping}
            />
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
