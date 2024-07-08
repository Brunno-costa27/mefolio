/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
      colors: {
        darkScale: {
          dark10: '#0B0B0B',
          dark20: '#101010',
          dark30: '#1F1F1F',
          dark40: '#FFFFFF'
        },
        brand: {
          brandColor: '#97EDAA'
        },
        // Adicione mais cores conforme necessário
      },
    },
  },
  plugins: [],
}

