/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      'term-background': '#1A1B26',
      'accent-color':'#8179B3',
      'container-background': '#24283B',
      'char-main': '#CFC9C2',
      'char-accent': '#7de5fa',
    },

    spacing:{
      '.5/8':'6.25%',
      '1/8':'12.5%',
      '2/8':'25%',
      '3/8':'37.5%',
      '4/8':'50%',
      '5/8':'62.5%',
      '6/8':'75%',
      '7/8':'87.5%',
      }
    },
  },
  plugins: [],
}

