/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
      },
      colors: {
        'primary-light': '#7531eb',
        'primary-dark': '#4710a6',
        'primary-content': '#f2ebfd',

        'background-light': '#efeff1',
        'background-dark': '#19181b',
        'foreground-light': '#fbfbfb',
        'foreground-dark': '#252329',

        'text-light': '#252329',
        'text-dark': '#fbfbfb',
      },
    },
  },
  plugins: [],
};
