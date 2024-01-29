import PropTypes from 'prop-types';

export default function Error({ message }) {
  return (
    <div className="p-6 dark:border-border-dark border-border-light border-2 rounded-xl m-10 mt-5">
      <h1 className="text-lg md:text-4xl font-bold after:content-[':('] after:pl-6">
        An error has occured
      </h1>
      <p className="italic mt-4">{message}</p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};
