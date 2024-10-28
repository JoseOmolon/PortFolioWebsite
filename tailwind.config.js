/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#de0029',
      },
        fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],

      },
      container:{
        center: true,
        padding: {
          default: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "1rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}
