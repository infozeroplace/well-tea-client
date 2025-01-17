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
      fontSize: {
        brand__font__size__xs: "12px",
        brand__font__size__sm: "14px",
        brand__font__size__base: "16px",
        brand__font__size__md: "18px",
        brand__font__size__lg: "24px",
        brand__font__size__lg2: "40px",
        brand__font__size__xl: "52px",
        brand__font__size__2xl: "74px",
        section__title__size: "32px",
      },
      fontWeight: {
        brand__font__thin: "100",
        brand__font__200: "200",
        brand__font__light: "300",
        brand__font__regular: "400",
        brand__font__500: "500",
        brand__font__600: "600",
        brand__font__semibold: "700",
        brand__font__bold: "900",
      },
      colors: {
        error: "#E72929",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        text__gray: "#7a7a7a",
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
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      // backgroundImage: {
      //   "welltea-hero": "url('')",
      // },
      animation: {
        "progress-circle": "progressCircle 1s ease-out forwards",
      },
    },
  },
  plugins: [nextui()],
};
