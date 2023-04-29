/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jxs,tsx}',
    './components/**/*.{js,ts,jxs,tsx}'
  ],
  darkMode: 'class',
  plugins: [
    require("flowbite/plugin")
  ]
}
