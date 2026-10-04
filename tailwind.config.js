/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(99,102,241,0.4), 0 15px 50px rgba(79,70,229,0.25)',
      },
      colors: {
        night: '#0b1020',
      },
    },
  },
  plugins: [],
};
