/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mipal: {
          dark: "#070F2B",
          nodark: "#1B1A55",
          gray: "#535C91",
          DEFAULT: "#9290C3",
        },
      },
    },
    fontFamily: {
      oswa: ["Oswald"],
    },
  },
  plugins: [],
};
