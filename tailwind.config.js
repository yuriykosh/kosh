const { color } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }
      },

      fontFamily: {
        erode: ["var(--font-erode)"],
        satoshi: ["var(--font-satoshi)"],
      },

      colors: {
        blue: "#2C37CD",
        white: "#DBD5C6",
        magenta: "#D023EA",
      },

      dropShadow: {
        "3xl": "0 -35px 35px rgba(0, 0, 0, 0.08)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      keyframes: {
        slideinUp: {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideinDown: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        enter: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        koshHome: {
          from: {
            backgroundColor: "rgb(44 55 205)",
          },
          to: {
            backgroundColor: "none",
          },
        },
      },
      animation: {
        slideinUp: "slideinUp 375ms ease var(--slideinUp-delay, 0) forwards",
        slideinDown:
          "slideinDown 375ms ease var(--slideinDown-delay, 0) forwards",
        enter: "enter 300ms ease var(--enter-delay, 0) forwards",
        koshHome: "koshHome 750ms ease forwards",
      },
    },
  },
  plugins: [],
};
