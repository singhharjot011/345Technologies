/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{html,css,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#8372A6",
        light: "#E5D4D0",
        darkButton: "#A68C86",
      },
      colors: {
        primary: "#8372A6",
        light: "#E5D4D0",
        darkButton: "#A68C86",
        darkText: "#553159",
        lightGreen: "#B7DBD0",
        lightYellow: "#FAE17D",
        darkGreen: "#1E624D",
        pinkishWhite: "#F9F0FE",
        blackAlternate: "#101722",
        lightViolet: "#BEC7E6",
        violet: "#6D5BE6",
        pinkAlternate: "#E93E68",
      },
    },
  },
  plugins: [],
};
