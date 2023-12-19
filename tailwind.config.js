/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        dark: "#141414",
        lightgray: "#F1F1F1",
        orange: "#D87D4A",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
