# react-typography-components
Contains reusable typography components that are responsive and flexible. 



## Tailwind.config.js
Add this to your tailwind configuration file.

  module.exports = {
   ...,
   theme: {
    fontFamily: {
     sans: ["", "sans-serif"],
     serif: ["", "serif"],
     mono: ["", "mono"],
    },
 
    extend: {
      fontSize: {
       "110px": "110px",
       "72px": "72px",
       "64px": "64px",
       "54px": "54px",
       "42px": "42px",
       "36px": "36px",
       "32px": "32px",
       "28px": "28px",
       "24px": "24px",
       "22px": "22px",
       "20px": "20px",
       "18px": "18px",
       "16px": "16px",
       "14px": "14px",
      },
 
      lineHeight: {
       1: "100%",
       1.1: "110%",
       1.2: "120%",
       1.3: "130%",
       1.4: "140%",
       1.5: "150%",
      },
 
      letterSpacing: {
       0: "0%",
       1: "1%",
       2: "2%",
       3: "3%",
      },
    },
   ...
  }
