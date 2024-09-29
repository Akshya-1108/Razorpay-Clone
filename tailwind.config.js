/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['mulish']
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#1358ed",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#191D2F",
        gray2: "#525a76",
        backgroundblue: "#f4f8ff"
      },
      fontSize: {
        he: '48px',
      },
      dropShadow: {
        '3xl': '0px 0px 25px rgba(0, 0, 0, 0.4)',
        'cust': '0px 0px 25px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};
