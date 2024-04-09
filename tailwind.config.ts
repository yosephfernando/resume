import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "tilt-neon": ['"Tilt Neon"', 'sans-serif']
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
      },
      backgroundPosition: {
        'center-4': 'center 1rem', // This sets the horizontal position to center and the vertical position to 1rem from the top
      },
    },
  },
  plugins: [],
};
export default config;
