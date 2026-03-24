/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./css/input.css"],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#EBEFE3",
          100: "#EBEFE3",
          200: "#B2BDA0",
          300: "#8D9E6F",
          400: "#8D9E6F",
          500: "#526534",
          600: "#526534",
          700: "#2F3B1C",
          800: "#2F3B1C",
          900: "#2F3B1C",
        },
        gold: "#C9A227",
      },
      fontFamily: {
        script: ["Great Vibes", "cursive"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      screens: {
        mobile: "481px",
        wedding: "1200px",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out",
      },
      spacing: {
        invitation: "0.55em",
        "invitation-lg": "0.8em",
        card: "0.85rem",
        "card-sm": "0.55rem",
        "card-lg": "1.6rem",
      },
      maxWidth: {
        card: "480px",
        "card-lg": "90%",
      },
    },
  },
  plugins: [],
};
