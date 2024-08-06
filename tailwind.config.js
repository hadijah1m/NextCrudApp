/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'illustration': "url('/illustration.png')",
        'website': "url('/websites.jpg')",
        'applications': "url('/apps.jpg')"
      }
    },
  },
  plugins: [],
};
