module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#333333",
        lightGray: "#F0F4FB",
        paragraph: "#7A818F",
        skyBlue: "#4BB4F7",
      },
      spacing: {
        100: "30rem",
        68: "17rem",
        "7/10": "70%",
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
