/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "color-fondo": "var(--color-fondo)",
        "color-titulo": "var(--color-titulo)",
        "color-texto": "var(--color-texto)",
        "color-primary": "var(--color-primary)",
      },
      fontFamily: {
        sans: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
