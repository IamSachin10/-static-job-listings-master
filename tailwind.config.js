/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(180, 29%, 50%)',
        'light-grayish-bg': 'hsl(180, 31%, 95%)',
        'grayish-cyan': 'hsl(180, 8%, 52%)',
        'dark-grayish-cyan': 'hsl(180, 14%, 20%)'

      },
      fontSize: {
        'fs-15': '0.9375rem'
      },
      fontWeight: {
        'fw-500': '500',
        'fw-700': '700'
      },
      fontFamily: {
        main: ['League Spartan']
      }
    },
  },
  plugins: [],
}

