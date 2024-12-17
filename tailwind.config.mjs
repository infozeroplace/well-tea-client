import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        teagreen: {
          100: "var(--teagreen-100)",
          200: "var(--teagreen-200)",
          300: "var(--teagreen-300)",
          400: "var(--teagreen-400)",
          500: "var(--teagreen-500)",
          600: "var(--teagreen-600)",
          700: "var(--teagreen-700)",
          800: "var(--teagreen-800)",
        },
      },
    },
  },
  plugins: [nextui()],
};
