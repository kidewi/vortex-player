module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-800': '#424549',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
