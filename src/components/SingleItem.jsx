import Header from './Header';
import { useParams } from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function SingleItem({ cart }) {
  const { id } = useParams();

  const { isLoading, data } = useFetch('https://fakestoreapi.com/products/' + id);

  if (isLoading) {
    return (
      <>
        <Header path="/" />
        <div className="h-svh w-svw absolute top-0 bottom-0 flex justify-center items-center text-8xl">
          <FontAwesomeIcon icon={faCircleNotch} spin />
        </div>
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
          <h1 className="text-center text-4xl mt-6 border-2 border-primary-light mx-16 rounded-2xl py-2 shadow-md sm:mx-auto sm:w-60">
            {data.price}$
          </h1>
          <button
            className="dark:bg-primary-dark bg-primary-light rounded-2xl my-4 py-2 px-6 shadow-md lg:border-2 lg:border-transparent lg:hover:border-border-light lg:transition-colors text-text-dark lg:box-border"
            onClick={() => {
              cart.addItem(data.id, 1);
            }}
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
