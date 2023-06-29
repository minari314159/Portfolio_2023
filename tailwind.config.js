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
      screens: {
        xs: "375px",
        s: "425px",
        md: "768px ",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
