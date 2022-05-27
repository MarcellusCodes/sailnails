const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#A9DEF9",
        secondary: "#FCF6BD",
        tertiary: "#D0F4DE",
        quaternary: "#E4C1F9",
        quinary: "#FF99C8",
        typography: "#444444",
      },
      fontFamily: {
        primary: ["Koulen", "cursive"],
        secondary: ["Lato", "sans-serif"],
        tertiary: ['"Rubik Glitch"', "cursive"],
      },
      boxShadow: {
        initial: "3px 3px 0 #444444",
        animate: "0 0 0 #444444",
        tap: "-3px -3px 0 #444444",
        extended: "6px 6px 0 #444444",
      },
    },
  },
  plugins: [],
};
