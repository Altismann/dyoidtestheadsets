/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#818181",
          "200": "#1a1b1f",
          "300": "#111",
          "400": "rgba(255, 255, 255, 0.39)",
        },
        silver: "#c4c5c5",
        darkgray: "#a1a1a1",
        black: "#000",
        darkslategray: "#333",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "65xl": "84px",
      "23xl": "42px",
      "6xl": "25px",
      "3xs": "10px",
      "27xl": "46px",
      "18xl": "37px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
