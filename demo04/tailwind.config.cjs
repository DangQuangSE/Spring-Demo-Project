/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5a7d',
        secondary: '#3870ff',
        'primary-light': '#ff7a9d',
        'primary-dark': '#e54a6d',
        'secondary-light': '#5890ff',
        'secondary-dark': '#2850e6',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #ff7d5a, #3870ff)',
        'gradient-primary-hover': 'linear-gradient(to right, #ff6d4a, #2850e6)',
      },
    },
  },
  plugins: [],
} 