module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cold: {
          50: '#C7EAFE',
          100: '#FA7D55',
          200: '#B8584C',
          300: '#B55E7F',
          400: '#C74A66',
          500: '#C44FB4',
          600: '#B675C7',
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
