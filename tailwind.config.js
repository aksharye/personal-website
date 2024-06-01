/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundClip: {
        'text': 'text',
      },
      mixBlendMode: {
        'screen': 'screen',
      },
      dropShadow: {
        glow: [
          "0 0px 5px rgba(255,255, 255, 0.35)",
          "0 0px 5px rgba(255, 255,255, 0.2)"
        ]
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1s ease-in-out 0.5'
      }
    },
  },
  plugins: [],
};
