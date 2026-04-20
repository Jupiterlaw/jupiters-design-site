import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#f6f3ee",
          100: "#ece4d7",
          200: "#d6c3a6",
          300: "#bfa275",
          400: "#a88554",
          500: "#8c6a3d",
          600: "#6f5330",
          700: "#564026",
          800: "#3c2d1b",
          900: "#241b10",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
