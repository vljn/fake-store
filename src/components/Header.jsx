import { Link } from 'react-router-dom';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import CartButton from './CartButton';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import 'animate.css';

export default function Header({ path }) {
  const [lastScroll, setLastScroll] = useState(0);
  const [showButtons, setShowButtons] = useState(true);
  let buttonClasses;

  if (showButtons) {
    buttonClasses = 'animate__animated animate__fadeInDown animate__faster';
  } else {
    buttonClasses = 'animate__animated animate__fadeOutUp animate__faster';
  }

  useEffect(() => {
    const controlButtonShow = () => {
      if (window.innerWidth < 640) {
        if (window.scrollY > lastScroll) {
          console.log(window.scroll());
          setShowButtons(false);
        } else {
          setShowButtons(true);
        }
      }
      setLastScroll(window.scrollY);
    };

    window.addEventListener('scroll', controlButtonShow);

    return () => {
      window.removeEventListener('scroll', controlButtonShow);
    };
  }, [lastScroll]);

  return (
    <div className="flex items-center justify-between px-10 py-10 max-sm:justify-center">
      <div className="flex items-center gap-16">
        <Logo path={path} />
        <Link to={'/items'}>
          <h2 className="relative text-xl after:content-[' '] after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-1 after:bg-text-light dark:after:bg-text-dark after:absolute after:-bottom-2 after:left-0 after:transition-transform after:origin-right after:duration-300">
            Items
          </h2>
        </Link>
      </div>
      <div
        className={'max-sm:fixed max-sm:bottom-8 max-sm:right-6 z-10 flex gap-6 ' + buttonClasses}
      >
        <CartButton />
        <ThemeSwitcher />
      </div>
    </div>
  );
}

Header.propTypes = {
  path: PropTypes.string,
};
