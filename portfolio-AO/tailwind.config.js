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
      spacing: {
        videoFullW: "1280px",
        videoFullH: "720px",

        videoLGW: "1014px",
        videoLGH: "580px",

        videoMDW: "752px",
        videoMDH: "480px",

        videoSMW: "600px",
        videoSMH: "480px",

        videoMinW: "500px",
        videoMinH: "400px",
      },
    },
    fontFamily: {
      oswa: ["Oswald"],
    },
  },
  plugins: [],
};
