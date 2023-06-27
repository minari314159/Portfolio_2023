/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FCCCB85",
        secondary: "#4A4A4A",
        tertiary: "#FED2BB",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        deeporange: "#FCCCB85",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
