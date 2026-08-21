/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: {
            DEFAULT: "#D4AF37",
            light: "#F5E9BE",
            dark: "#A88319",
          },
          rose: {
            DEFAULT: "#E6B8B8",
            light: "#F7ECEC",
            dark: "#C38787",
          },
          cream: {
            DEFAULT: "#FAF8F5",
            light: "#FFFFFF",
            dark: "#EFEAE1",
          },
          dark: {
            DEFAULT: "#2A2421",
            light: "#433A35",
            dark: "#161210",
          },
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

