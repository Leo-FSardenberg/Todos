/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors:{
        'gray-header': '#0D0D0D',
        'gray-task' : '#808080',
        'gray-input': '#262626',
        'blue-dark': '#1E6F9F',
        'blue-light': '#4EA8DE',
        'purple-dark':'#5E60CE',
            }
    },
  },
  plugins: [],
}

