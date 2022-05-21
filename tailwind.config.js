/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      yeseva: ['Yeseva One', 'serif'],
      mont: ['Montserrat', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
      jetbrains: ['JetBrains Mono'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        customDown: 'customDown 500ms ease-in-out',
      },
      keyframes: {
        customDown: {
          '0%': {
            transform: 'translate(0,-4rem)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0)',
            opacity: '1',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          // '66%': {
          //   transform: 'translate(-20px, 20px) scale(0.9)',
          // },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
