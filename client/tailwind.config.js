/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      purple: colors.purple,
      blue: colors.blue,
      teal: colors.teal,
      slate: colors.slate,
      red: colors.red,
      orange: colors.orange,
      green: colors.green,
      pink: colors.pink,
    },
    extend: {},
  },
  plugins: [],
};
