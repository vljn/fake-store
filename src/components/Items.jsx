import useFetch from 'react-fetch-hook';
import Header from './Header';
import ItemsList from './ItemsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export default function Items() {
  const { isLoading, data, error } = useFetch('https://fakestoreapi.com/products');

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

  if (error) {
    console.error(error);
    return (
      <>
        <Header path="/" />
      </>
    );
  }

  return (
    <>
      <Header path="/" />
      <ItemsList items={data} />
    </>
  );
}
