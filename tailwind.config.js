module.exports = {
  purge: ["./src/*.html", "./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "some-random-colors": "#a04097",
        indigo: {
          light: "#b3bcf5",
          DEFAULT: "#5c6ac4",
          dark: "#202e78",
        },
        azure: "#f0ffff",
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [require("@tailwindcss/forms")],
};
