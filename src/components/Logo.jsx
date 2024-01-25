import logoImage from '../assets/logoImage.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Logo({ path }) {
  function generateLogo() {
    return (
      <div className="group flex items-center gap-4 cursor-pointer">
        <img
          src={logoImage}
          className="group-hover:-translate-y-3 group-hover:rotate-12 group-hover:scale-110 transition-transform transition-duration"
          alt=""
        />
        <div className="relative">
          <h1 className="max-sm:text-2xl font-poppins font-bold text-3xl select-none  after:content-[' '] after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:h-1 after:bg-text-light dark:after:bg-text-dark after:absolute after:-bottom-2 after:left-0 after:transition-transform after:origin-right after:duration-300">
            FakeStore.
          </h1>
        </div>
      </div>
    );
  }
  return path ? <Link to={path}>{generateLogo()}</Link> : generateLogo();
}

Logo.propTypes = {
  path: PropTypes.string,
};
