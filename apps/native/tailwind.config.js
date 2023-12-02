const pastel = '#fafdfa';
const primary = '#ea521f';
const secondary = '#3d3435';
const error = '#f44336';
const success = '#4caf50';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          light: pastel,
          main: pastel,
          dark: pastel,
        },
        primary: {
          light: primary,
          main: primary,
          dark: primary,
        },
        secondary: {
          light: secondary,
          main: secondary,
          dark: secondary,
        },
      },
    },
    colors: {
      error: {
        light: error,
        main: error,
        dark: error,
      },
      success: {
        light: success,
        main: success,
        dark: success,
      },
    },
  },
  plugins: [],
};
