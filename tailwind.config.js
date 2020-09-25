module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-accent': '#27ccfc',
        'orange-accent': '#fdaf41',
      },
    },
  },
  variants: {},
  plugins: [],
}
