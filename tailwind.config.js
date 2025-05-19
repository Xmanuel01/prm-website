/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // Color palette
        colors: {
          primary: {
            50: '#f8f5f2',
            100: '#efe8e0',
            200: '#d9c9b8',
            300: '#c0a68d',
            400: '#a88363',
            500: '#90684a', // Main chocolate brown
            600: '#7a543d',
            700: '#5e4232',
            800: '#4B2C20', // Dark chocolate (used in design)
            900: '#2d1c14',
          },
          secondary: {
            50: '#fdf8e8',
            100: '#fbeec3',
            200: '#f8e399',
            300: '#f5d76e',
            400: '#f2cc4d',
            500: '#eec12d', // Vibrant gold
            600: '#D4AF37', // Main gold (used in design)
            700: '#b7950b', // Dark gold
            800: '#947909',
            900: '#765c06',
          },
          accent: {
            light: '#f5f5f5',
            DEFAULT: '#e0e0e0',
            dark: '#616161',
          },
        },
        
        // Font families
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Lora', 'serif'],
          display: ['"Playfair Display"', 'serif'],
        },
        
        // Extended spacing scale
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        
        // Custom shadows
        boxShadow: {
          'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          'nav': '0 4px 6px -1px rgba(75, 44, 32, 0.1), 0 2px 4px -1px rgba(75, 44, 32, 0.06)',
        },
        
        // Custom animations
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.5s ease-out',
        },
        
        // Keyframes for animations
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        
        // Custom container padding
        container: {
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp'),
    ],
  }