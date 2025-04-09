// tailwind.config.js

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        fontFamily: {
            silkscreen: ['Silkscreen', 'sans-serif'],
        },
        colors: {
            bgcolor: '#FFF1BB',
            buttoncolor: '#FFDE59',
            buttonhover: '#EAC11A',
        },
        boxShadow: {
            shadow: '2px 4px 15px #8B6F00',
        },
      },
    },
    plugins: [],
  };
  
  