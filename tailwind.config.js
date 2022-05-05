module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        yellow: '#fbca11',
        blue: '#164ea0',
        teal: '#073647',
        darkTeal: '#6d7b7e',
        lightGray: '#dedee0',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  future: {
    purgeLayersByDefault: true,
  },
}
