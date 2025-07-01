/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014", // Indigo 600
        secondary: "#151312", // Amber 500
        accent: "#AB8BFF", // Emerald 500
        light:{
          100: "#D6C6FF", // Gray 100
          200: "#A8B5DB", // Gray 200
          300: "#9CA4AB", // Gray 300
        },
        dark:{
          100: "#221f3d",
          200:"#0f0d23",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}