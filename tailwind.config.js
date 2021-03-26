module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {

      colors: {
        transparent: 'transparent',
        punklimegreen: {
          DEFAULT: '#baff29',
        },
        punkblue: {
          light: '#B2E4DB',
          DEFAULT: '#B2E4DB',
          dark: '#000729',
        },
      }
    },
  },
  variants: {},
  plugins: [],
}
