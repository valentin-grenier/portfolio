import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "13px",
        xs: "15px",
        sm: "16px",
        base: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "6xl": "64px",
      },
      colors: {
        danube: {
          "50": "#f1f6fc",
          "100": "#e5f0fa",
          "200": "#d0e1f5",
          "300": "#b3cdee",
          "400": "#94b1e5",
          "500": "#7391d9",
          "600": "#4D65C7",
          "700": "#4f63b3",
          "800": "#425391",
          "900": "#3b4974",
          "950": "#232a43",
          bg: "#F4F4F9",
          accent: "#4D65C7",
        },
        light: "#f1f6fc",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(to top right, #94B1E5, #425391)",
      },
      transitionProperty: {
        position: "top, bottom, left, right",
      },
      animation: {
        showBurger: "showBurger 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
