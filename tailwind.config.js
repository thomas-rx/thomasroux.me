const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primaryLight: colors.teal[700],
        primaryDark: colors.teal[600],
        secondaryLight: colors.teal[900],
        secondaryDark: colors.emerald[200],
        neutralLight: colors.gray[900],
        neutralDark: colors.gray[100],
      },
    },
  },
};
