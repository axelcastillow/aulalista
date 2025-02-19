module.exports = {
  purge: ["./*.html", "./assets/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",

  theme: {
    container: {
      center: true,
    },

    extend: {},
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
