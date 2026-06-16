/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", 
        dark: "#0f172a",    
        light: "#f8fafc",   
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      // 👇 কাস্টম কি-ফ্রেম যুক্ত করা হলো যেন QR কোড স্মুথলি ভেসে ওঠে
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(15px) scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.4s ease-out forwards',
      }
    },
  },
  plugins: [],
}