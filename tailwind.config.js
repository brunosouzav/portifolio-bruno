/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 0.5rem))" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(calc(-50% - 0.5rem))" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        "marquee-reverse": "marquee-reverse var(--duration, 30s) linear infinite",
      },
    },
  },
  plugins: [],
}

