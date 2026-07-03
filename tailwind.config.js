/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#241220",
        wine: "#3B1D2E",
        "wine-deep": "#190B15",
        rose: "#E8A0BF",
        "rose-soft": "#F2C8D9",
        gold: "#D4AF6A",
        "gold-soft": "#E9CE9C",
        cream: "#F7ECE1",
        ember: "#8C2F39",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      keyframes: {
        eq: {
          "0%, 100%": { height: "3px" },
          "50%": { height: "12px" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 40px rgba(232,160,191,0.3)" },
          "50%": { boxShadow: "0 0 70px rgba(232,160,191,0.55)" },
        },
      },
      animation: {
        eq: "eq 1s infinite ease-in-out",
        "float-slow": "floatSlow 5s ease-in-out infinite",
        "glow-pulse": "glowPulse 2.4s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
