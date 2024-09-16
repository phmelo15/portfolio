import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        custom: "0px 1px 12px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        Nav: "#1E1E1E",
        backgroundHome: "#161513",
        backgroundWhite: "#FFFFFF ",
        black: "#000000",
        Footer: "#191919",
        orange: {
          orangeOne: "#FF8660",
          orangeTwo: "#D5491D",
        },
        primary: {
          yellowOne: "#FFF1E0",
          yellowSix: "#DB9B10",
        },
        secundary: {
          grayOne: "#EFF3FA",
          grayTwo: "#DFE8F6",
          grayThree: "#C5D0E6",
          grayFour: "#A9B4CD",
          grayFive: "#848FAC",
          graySix: "#606D93",
          graySeven: "#C5C5C5",
          grayEight: "#2A2A2A",
        },
        blue: {
          blueFour: "#649DFB",
          blueFive: "#3276FA",
          blueSix: "#5BADFF",
          blueSeven: "#1373D1",
        },
        blueLogo: "#649DFB",
      },
    },
  },
  plugins: [],
};
export default config;
