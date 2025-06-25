import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#F2F2F2", // background
            primary: {
              500: "#191C32",      // primary
              700: "#010D50",      // primary darker
            },
            secondary: {
              200: "#F2F2F2",     // secondary lighter
              500: "#E8A9C5",     // secondary
            },
          },
        },
      },
    }),
  ],
};

export default config;