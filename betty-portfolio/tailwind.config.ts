/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDF5',
        greenDark: '#1B5E20',
        greenLight: '#4CAF50',
      },
    },
  },
  plugins: [],
}