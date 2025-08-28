/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D72638',
        secondary: '#FFC857',
        dark: '#1E1E1E',
        light: '#F9F9F9',
        'light-red': '#FFF0F0'
      },
    },
  },
  plugins: [],
};