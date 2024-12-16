/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // cyberpunk: {
        //   100: '#f8f9fa',
        //   200: '#e2e4e6',
        //   300: '#cbd0d5',
        //   400: '#9faab2',
        //   500: '#7b8994',
        //   600: '#5a6a80',
        //   700: '#3d4b65',
        //   800: '#2b374c',
        //   900: '#1b2337',
        // },
        accent: {
          DEFAULT: '#00aaff',
        },
      },
    },
  },
  plugins: [],
};
