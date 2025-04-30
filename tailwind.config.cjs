/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Archivos que Tailwind debe procesar
  ],
  darkMode: 'class', // Habilita el modo oscuro basado en la clase 'dark'
  theme: {
    extend: {}, // Personaliza el tema aquí si es necesario
  },
  plugins: [],
};