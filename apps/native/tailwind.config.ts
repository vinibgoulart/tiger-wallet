import { colors } from '@tiger-wallet/theme';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          light: colors.pastel,
          main: colors.pastel,
          dark: colors.pastel,
        },
        primary: {
          light: colors.primary,
          main: colors.primary,
          dark: colors.primary,
        },
        secondary: {
          light: colors.secondary,
          main: colors.secondary,
          dark: colors.secondary,
        },
      },
    },
  },
  plugins: [],
};
