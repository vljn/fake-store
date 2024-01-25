import PropTypes from 'prop-types';

export default function Button({ children }) {
  return (
    <button className=" bg-primary-light text-4xl text-primary-content  px-6 py-3 rounded-2xl border-primary-dark border-4 dark:hover:border-primary-content transition-[border] hover:border-foreground-light">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
};
