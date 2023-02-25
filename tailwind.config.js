const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm2': '576px',
        'md2': '768px',
      },
    },
    ...defaultTheme
  },
  plugins: [],
};




