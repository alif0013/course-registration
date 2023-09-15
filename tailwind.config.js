/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#91d2e0",
"secondary": "#fcc0ba",
"accent": "#a6f490",
"neutral": "#271627",
"base-100": "#ffffff",
"info": "#94b9eb",
"success": "#56d78c",
"warning": "#a67d0c",      
"error": "#f2321c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

