/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {  
        primary: "#040509",
        primaryDark: "#141b2d",
        secondary: "#4cceac",
        tertiary: "#f2f0f0",
        tertiaryDark: "#1f2a40",
        purple: "#a4a9fc",
        purpleDark: '#3e4396'
      },
    },
  },
  plugins: [],
}

