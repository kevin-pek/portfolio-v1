module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cold: {
          50: '#D9F9FF',
          100: '#D0F2FF',
          200: '#C7EAFE',
          300: '#BEE1FD',
          400: '#B5D6FD',
          500: '#A5BEFB',
          600: '#8B90F2',
          700: '#7A70D7',
          800: '#6358AD',
          900: '#3E356B',
          950: '#1E1933'
        },
        warm: {
          50: '#E6E6D8',
          100: '#DFE3CC',
          200: '#C5DEB6',
          300: '#B3DBAA',
          400: '#94D19E',
          500: '#7FC49F',
          600: '#6AB19C',
          700: '#579991',
          800: '#437B7C',
          900: '#2F565B',
          950: '#1D3439'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
