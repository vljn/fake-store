import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import PropTypes from 'prop-types';

export default function Header({ path }) {
  return (
    <div className="flex items-center justify-between px-10 py-10 max-sm:justify-center">
      <Logo path={path} />
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

Header.propTypes = {
  path: PropTypes.string,
};
