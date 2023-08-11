/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '4xl': '2.5rem',
      },
      colors: {
        'primary-1': '#495e57',
        'primary-2': '#f4ce14',
        'secondary-1': '#ee9972',
        'secondary-2': '#fbdabb',
        light: '#edefee',
        dark: '#333333',
      },
    },
  },
  plugins: [],
};
