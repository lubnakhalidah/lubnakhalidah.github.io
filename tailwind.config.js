/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple_light: "#FDE2F3",
        purple_mid: "#E5BEEC",
        purple_dark: "#917FB3",
        purple_verydark: "#2A2F4F",
      },
    },
  },
  plugins: [require("daisyui")],
});
