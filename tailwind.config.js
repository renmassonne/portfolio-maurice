/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f1f1ef",
        black: "#000000",
        medGrey: "#7f7f7f",
        darkGrey: "#7f7f7f",
        lightGrey: "#cccccc",
        gradientBlack:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.31416316526610644) 100%)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
