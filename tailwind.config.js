module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: "240px",
      md: "368px",
      lg: "4024px",
      xl: "1280px",
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
