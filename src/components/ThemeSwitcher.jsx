import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState('false');

  useEffect(() => {
    let dark = localStorage.getItem('darkMode');
    console.log(dark);
    if (!dark) {
      const saved = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('darkMode', saved);
      dark = saved;
    }
    if (dark === 'false') {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button className="hover:scale-125 transition-transform text-4xl max-sm:text-2xl max-sm:absolute max-sm:bottom-8 max-sm:right-8">
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        onClick={() => {
          setDarkMode(!darkMode);
          localStorage.setItem('darkMode', !darkMode);
        }}
      />
    </button>
  );
}
