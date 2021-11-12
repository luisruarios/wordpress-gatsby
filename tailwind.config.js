const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '10': '3.938rem',
        
       },
      fontSize: {
        '7xl': '4.125rem', //66px Head 1
        '5Xl': '3.5rem',   //56px Head 2 
        '2xl': '2.875rem', //46px Head 3
        '4xl': '2.25rem',  //36px Head 4 
        '3xl': '1.875rem', //30px Head 5   
        'ttl1': '1.5rem',  //24px Title 1
        'ttl2': '1.25rem', //20px Title 2
        'sbt': '1rem',     //16px Subtitle
        'p1' : "0.875rem", //14px Paragraph 1
        'p2' : "0.813rem", //13px Paragraph 2
        'xs' : "0.75rem",  //12px Note 1 
        'xxs' : "0.688rem" //11px Note 2
       },
      colors: {
        "blue-600": "#1477BD",
        "blue-400": "#3191D4",
        "blue-300": "#3298DF",
        "primary": "#1477BD",
        "secondary": "#41C0F0",
        "tertiary": "#282B2C",
        "gray": "#6B6E6F",
        "light-gray": "#D3D4D4",
        "confirmation-state": "#5EB132",
        "error-state": "#E62245",
       "gradient-left": "#1477BD",
       "gradient-right:": "3191D4"
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1180px",
        xl: "1180px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.7xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.leading-loose')
          
        },

        'h2': {
          fontSize: theme('fontSize.5Xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.leading-loose')
        },

        'h3': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
        'h4': {
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
        'h5': {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.semibold'),
        },


      })
    })
  ],
};