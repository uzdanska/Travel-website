/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
      backgroundImage: {
        "hero-pattern": "linear-gradient(180deg, rgba(0, 0, 0, 0.81) 0%, rgba(72, 72, 72, 0.00) 31.25%, rgba(158, 158, 158, 0.00) 80.6%, #FFF 89.42%), url('/src/assets/background.png')",
        "map": "url('assets/world_map.png')",
      },
    },

  plugins: [],
}

