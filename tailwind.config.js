/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        katarsis: {
          yellow:  "#FFE135",
          red:     "#FF5733",
          blue:    "#3B82F6",
          green:   "#22C55E",
          pink:    "#FF2E9A",
          orange:  "#F97316",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "monospace"],
        mono:    ["'Space Mono'", "monospace"],
      },
      boxShadow: {
        neo:     "4px 4px 0px 0px #000",
        "neo-lg":"6px 6px 0px 0px #000",
        "neo-sm":"2px 2px 0px 0px #000",
      },
    },
  },
  plugins: [],
}
