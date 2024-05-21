/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: '#eba813',
          secondarytwo: '#AB72E8',
          default: '#A19FA6', 
          primarytwo: "#1486CC",
          primaryLight: '#fceed0',
        },
      },
      dark: {
        colors: {},
      },
    },
  })],}

