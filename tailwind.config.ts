import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { transform: 'translateY(10px)', opacity: "0%" },
          '100%': { transform: 'translateY(0px)', opacity: "100%" },
        }
      },
      animation: {
        fadein: "fadein 1s ease-in-out forwards"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-text": "#EFEFEF"
      }
    },
  },
  plugins: [],
};
export default config;
