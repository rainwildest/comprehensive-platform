module.exports = {
  content: [
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,vue}",
    "./components/**/*.{js,ts,jsx,tsx,vue}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      width: {}, // 18px
      height: {}, //18px
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        gray: {
          c1000: "#eff0f4"
        }
      },
      boxShadow: {
        // lg: "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);"
      },
      fontFamily: {}
    }
  },
  plugins: [],
  corePlugins: {
    preflight: true
  },
  important: "#__next"
};
