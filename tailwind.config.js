/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
      backgroundImage: {
        'hero-mobile': "url('/images/bg-mobile.png')",
        'hero-tablet': "url('/images/bg-tablet.png')",
        'hero-desktop': "url('/images/bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
