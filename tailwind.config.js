module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        yellow: '#fbca11',
        blue: '#164ea0',
        richBlue: '#0f1dd8',
        teal: '#073647',
        darkTeal: '#6d7b7e',
        lightGray: '#dedee0',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('./node_modules/tw-elements/dist/plugin'),
  ],
  future: {
    purgeLayersByDefault: true,
  },
}
