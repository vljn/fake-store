import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState('false');

  useEffect(() => {
    let dark = localStorage.getItem('darkMode');
    if (!dark) {
      const saved = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('darkMode', saved);
      dark = saved;
    }
    setDarkMode(dark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark');
    console.log(document.documentElement);
  }, [darkMode]);

  return (
    <button className="text-foreground-light dark:text-foreground-dark">
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        size="2xl"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      />
    </button>
  );
}
