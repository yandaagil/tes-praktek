/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iris: "#5d5fef",
        grey: "#98949E",
        black: "#110D17",
        levelbg: {
          orange: "#FEFBF6",
          green: "#F6FEF9",
          blue: "#F6FCFE",
          purple: "#FEF5FF",
        },
        gradientstart: {
          orange: "#EEA849",
          green: "#38EF7D",
          blue: "#56CCF2",
          purple: "#E100FF",
        },
        gradientend: {
          orange: "#F46B45",
          green: "#11998E",
          blue: "#2F80ED",
          purple: "#7F00FF",
        },
      },
    },
  },
  plugins: [],
};
