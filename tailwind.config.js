/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary1: "#111",
        secondary2: "#222",
        secondary_light1: "#f2f2f2",
        secondary_light2: "#999",
      },
      height: {
        custom_h_1: "50px",
        custom_h_2: "320px",
        custom_h_3: "400px",
        custom_h_4: "140px",
        custom_h_5: "70px"
      },
      width: {
        custom_w_1: "550px",
        custom_w_2: "360px"
      },
      screens: {
        mobile: { max: "877px" },
        mobile2: { max: "440px" },
      },
      gridTemplateColumns: {
        grid1: " repeat(4, 1fr);",
      },
    },
  },
  plugins: [],
};

