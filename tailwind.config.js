/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#040000",
        secondary: "#EA0A0A",
        success: "#65BC7B",
        neutral: "#02002f",
      },
      fontFamily: {
        sans: ['var(--font-outfit)'],
        kufi: ['var(--font-kufi)'],
      },
      screens: {
        '3xl': '1799px',
        '4xl': '2199px',
        '5xl': '2499px'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
