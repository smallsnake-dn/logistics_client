/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ls-cl" : "#2e313c",
        "ls-nav" : "#313541",
        "ct-th" : "#fbfafb"
      },
    },
  },
  plugins: [],
}

