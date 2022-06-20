module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#340C64",
          secondary: "#8B0967",
          // accent: "#37cdbe",
          // neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
