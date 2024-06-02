/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { min: "0px", max: "576px" },
      sm: { min: "576px", max: "767px" },
      lg: { min: "992px", max: "1199px" },
      md: { min: "768px", max: "991px" },
      xl: { min: "1200px" },
    },
    extend: {},
  },
  plugins: [],
};
