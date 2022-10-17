module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      'contentLayout': 'calc(100vh - 76px)'
    }
  },
  variants: {},
  plugins: [],
}