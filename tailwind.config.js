/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '.index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008EE0',
        secondary: '#1E7EB6',
        tertiary: '#2E698B',
        quaternary: '#304F61',
        dark: '#243036',
        darker: '#2B3033',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right bottom, #008EE0, #1E7EB6, #2E698B, #304F61)',
      },
    },
  },
  plugins: [
    
  ],
}
          

