/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        primary: ['Poppins'],
    },
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1520px'
    },
    extend: {
        spacing: {
            '60px': '60px',
            '70px': '70px',
            '25v': '25vh',
            '50v': '50vh',
            '75v': '75vh',
        }
    }
  }
}