module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#989EA7',
        'primary-light': '#E8EDF3',
        'primary-dark': '#313E4F',
        'accent-blue': '#33A6BA',
        'accent-red': '#FF7B92',
        'background-card': '#FFFFFF',
        'background-body': '#E8EDF3',
      },
      fontSize: {
        'display': '4rem',
      },
      lineHeight: {
        'display': '4rem',
        'micro': '1.125rem',
      },
      letterSpacing: {
        'meta': '0.02em',
      },
      fontFamily: {
        sans: ['Proxima Nova Lt'],
        bold: ['Proxima Nova Rg'],
        light: ['Proxima Nova Th'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
