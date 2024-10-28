/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Change this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#de0029', // Primary color
        light: '#d8c8a2',   // Light beige color
        dark: '#1f103f',    // Dark mode color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace']
      },
      container: {
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
