/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A5267",
        secondary: "#A9B2CA",
        third: "#BEBEBE",
        forth: "#4F4F4F",
        darkPrimary: "#C4EEFC", // 修正了暗模式主色的值
        darkSecondary: "#62808A",
        darkThird: "#989898",
      },
      screens: {
        xs: "480px",
        // 既有的 sm/md/lg... 照留
      },
    },
  },
  plugins: [],
};
