/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aptos', 'Segoe UI', 'Segoe UI Web', 'Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'salama-teal': {
          dark: '#05696B',
          DEFAULT: '#14A085',
          light: '#B2DFDB',
        },
        'salama-yellow': {
          DEFAULT: '#F7C513',
          light: '#FFF9E6',
        },
      },
    },
  },
  plugins: [],
}
