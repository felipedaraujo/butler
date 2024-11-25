/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Add Open Sans as the default sans font
      },
      colors: {
        primary: {
          DEFAULT: '#233B7B',
        },
        secondary: {
          DEFAULT: '#F9BA09',
        },
      },
    },
  },
  plugins: [],
}
