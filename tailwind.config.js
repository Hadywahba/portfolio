/** @type {import('tailwindcss').Config} */
export default { 
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      ],
       darkMode: 'class',
  theme: {
    container:{
        center:true ,
        screens: {
       sm: "100%",
    md: "100%",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    

    }
      },
    extend: {
      animation: {
        "spin-slow2": 'spin-reverse 8s linear infinite',
         
      },
      keyframes: {
  'spin-reverse': {
    from: { transform: 'rotate(360deg)' },
    to: { transform: 'rotate(-360deg)' },
    
  },
  
},
fontFamily:{
 "Lato":["Lato","sans-serif"],
 "Amatic":["Amatic SC","sans-serif"],
},
      
      colors:{
        "main":"#0aad0a",
        "submain":"#DDEB9D",
        "text-color":"#ADFF2F",
        "text-dark-color":"#32CD32",
        "colo3":"#B4E50D",
        "col4":"#84AE92",
        
      }
      
    },
  },
  plugins: [],
}

