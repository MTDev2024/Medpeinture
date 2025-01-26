/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Inclure vos fichiers HTML/JS
    "./node_modules/flowbite/**/*.js", // Ajouter Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Ajouter le plugin Flowbite
  ],
};
