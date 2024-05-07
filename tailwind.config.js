/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#4CAF4F',
        'custom-silver': '#F5F7FA',
        'custom-black': '#18191F',
        'custom-grey': '#717171',
        'custom-neutral': '#263238',
      },
    },
  },
  plugins: [require('daisyui')],
};
