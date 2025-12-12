/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        map: ['"IM Fell DW Pica"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        parchment: "#F5E6C8",
        ink: "#2C1810",
        gold: "#C5A059",
        gryffindor: "#740001",
        hufflepuff: "#ECB939",
        ravenclaw: "#0E1A40",
        slytherin: "#1A472A",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'footprints': 'footprints 4s linear infinite',
        'flutter': 'flutter 0.1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        footprints: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' }
        },
        flutter: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.5)' },
        }
      }
    }
  },
  plugins: [],
}
