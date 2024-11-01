/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        ping: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        slowSpin: "spin 3s linear infinite",
        extraSlowSpin: "spin 6s linear infinite",
        expandWidth: "expandWidth 2s ease-in-out infinite",
      },
      keyframes: {
        expandWidth: {
          "0%, 100%": {
            width: "0%",
          },
          "50%": {
            width: "100%",
          },
        },
        slowSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        extraSlowSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
}

