/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      blue: "#2C37CD",
      white: "#DBD5C6",
      magenta: "#D023EA",
    },
    extend: {
      fontFamily: {
        erode: ["var(--font-erode)"],
        satoshi: ["var(--font-satoshi)"],
      },
    },
  },
  plugins: [],
};
