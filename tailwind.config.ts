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
        'first-color': '#FD5F0D',
        'second-color': '#EDCF6B',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #EDCF6B, #FD5F0D, white)',
      },
    },
  },
  plugins: [],
};
export default config;
