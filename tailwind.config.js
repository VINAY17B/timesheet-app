// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Crucial: Tell Tailwind to scan your project files for classes
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // If you have other folders with JSX/TSX or HTML files, add them here.
    // The default init might add a path for `./app` if you selected App Router,
    // but since you're using Pages Router, these two are primary.
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as default sans-serif font
      },
      // You can define custom colors here if needed, e.g.:
      // colors: {
      //   primaryBlue: '#0070F3',
      // },
    },
  },
  plugins: [],
};