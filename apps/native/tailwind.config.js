const pastel = '#fafdfa';
const primary = '#3d3435';
const secondary = '#ea521f';

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
  },
  plugins: [],
};