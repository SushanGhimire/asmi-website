module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        100: "32rem",
      },
      colors: {
        darkBlack: "#333333",
        paragraph: "#7A818F",
        skyBlue: "#4BB4F7",
      },
      spacing: {
        100: "30rem",
        68: "17rem",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
