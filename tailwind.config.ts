import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--font-secondary)",
        description: "var(--color-description)",
      },
      screens: {
        'xs': '500px',
        'tablet': '768px',
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
};
export default config;