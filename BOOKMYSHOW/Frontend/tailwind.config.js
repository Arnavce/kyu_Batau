/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FDA481', // Adding your custom color
      },
    },
  },
  plugins: [],
}

