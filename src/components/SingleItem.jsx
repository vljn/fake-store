import Header from './Header';
import { useParams } from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Loading from './Loading';

export default function SingleItem({ cart }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { isLoading, data } = useFetch('https://fakestoreapi.com/products/' + id);

  const handleQuantityChange = (e) => {
    console.log(e);
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    const q = parseInt(quantity);
    if (Number.isInteger(q) && q > 0) {
      cart.addItem(data.id, parseInt(q));
    }
  };

  if (isLoading) {
    return (
      <>
        <Header path="/" />
        <Loading />
      </>
    );
  }

  if (!isLoading && !data) {
    return <Navigate to={'*'} />;
  }

  return (
    <>
      <Header path={'/'} />
      <div className="text-center lg:grid lg:grid-cols-[400px_1fr] lg:grid-rows-2 lg:mx-16 lg:mt-10">
        <div className="max-sm:mx-24 border-4 border-primary-light dark:border-primary-dark p-1 rounded-2xl shadow-md sm:max-w-80 sm:mx-auto lg:m-0 lg:max-w-none lg:row-span-2 lg:hover:scale-110 lg:transition-transform">
          <img
            src={data.image}
            alt=""
            className=" rounded-[0.75rem] sm:w-full lg:w-max lg:h-full"
          />
        </div>
        <div>
          <h1 className="text-center text-xl mt-4 mx-2 lg:m-0 lg:text-2xl">{data.title}</h1>
          <p className="text-center mt-4 mx-5 lg:mx-20">{data.description}</p>
        </div>
        <div className="lg:self-end">
          <h1 className="text-center text-4xl mt-6 border-2 border-primary-light dark:border-primary-dark mx-16 rounded-2xl py-2 shadow-md sm:mx-auto sm:w-60">
            {data.price}$
          </h1>
          <form className="mt-4 flex items-center justify-center gap-4">
            <button
              className="text-3xl border-2 w-10 h-10 dark:border-primary-dark border-primary-light hover:bg-border-dark rounded-3xl duration-300"
              onClick={(e) => {
                e.preventDefault();
                setQuantity((q) => {
                  if (q > 1) {
                    return q - 1;
                  }
                  return q;
                });
              }}
            >
              -
            </button>
            <input
              className="required bg-transparent text-center shadow-md text-2xl border-2 rounded-2xl dark:border-primary-dark border-primary-light w-32 focus:outline-none appearance-[textfield] m-0"
              type="number"
              value={quantity}
              onInput={handleQuantityChange}
              min={1}
            />
            <button
              className="text-3xl border-2 w-10 h-10 dark:border-primary-dark border-primary-light rounded-3xl hover:bg-border-dark transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                setQuantity((q) => q + 1);
              }}
            >
              +
            </button>
          </form>
          <button
            className="dark:bg-primary-dark bg-primary-light rounded-2xl mt-4 py-2 px-6 shadow-md lg:border-2 lg:border-transparent lg:hover:border-border-light lg:transition-colors text-text-dark lg:box-border"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faCartShopping} className="mr-4" />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

SingleItem.propTypes = {
  cart: PropTypes.object,
};
