import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'RR': '#FFA733',
        background: {
          DEFAULT: "var(--background)",
          transparent: "var(--background-transparent)",
        },


      },
      keyframes: {
        wave: {
         
          '0%, 100%': { transform: 'translate(0, -30px)   '  },
          '50%': {  marginLeft: '-100px', transform: 'translate(100px, 50px)  ' },

        },
        swell: {
         
          '0%, 100%': { transform: 'translate(0, -30px)  ' },
          '50%': {  marginLeft: '-1500px', transform: 'translate(1000px, 30px)  ' },

        },

      },
      animation: {
        growAndFade: 'growAndFade 3s infinite ease-out',
        wave: 'wave 10s ease infinite',
        swell: 'swell 20s ease infinite',
      },
    },
    
    
  },
  
  
  plugins: [],
};
export default config;
