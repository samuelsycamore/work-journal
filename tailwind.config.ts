const colors = require("tailwindcss/colors");

import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
      },
    },
  },
  plugins: [],
} satisfies Config;
