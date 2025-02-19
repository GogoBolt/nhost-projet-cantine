/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EAF7FF',
          100: '#D5EFFF',
          200: '#AAE0FF',
          300: '#80D0FF',
          400: '#55C1FF',
          500: '#0070BA',
          600: '#003087',
          700: '#002C6E',
          800: '#002356',
          900: '#001A3D',
        },
        secondary: {
          50: '#F5F7FA',
          100: '#E4E9F2',
          200: '#CBD4E1',
          300: '#A8B9CC',
          400: '#8EA3B9',
          500: '#169BD7',
          600: '#142C8E',
          700: '#0E1F66',
          800: '#091340',
          900: '#040919',
        },
        success: '#2C9B00',
        warning: '#FFB700',
        danger: '#C72E2E',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}