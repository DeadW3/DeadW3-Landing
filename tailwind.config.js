/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deadw3-dark': '#0a0a0a',
        'deadw3-charcoal': '#1a1a1a',
        'deadw3-gray': '#2a2a2a',
        'deadw3-purple': '#6b46c1',
        'deadw3-blue': '#2d3b5f',
        'deadw3-amber': '#d4a574',
        'deadw3-sepia': '#b8956a',
        // Grateful Dead colors
        'gd-blue': '#253387',
        'gd-red': '#c92d25',
        'gd-white': '#ffffff',
        'gd-black': '#000000',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'psychedelic': ['Righteous', 'sans-serif'],
        'psychedelic-alt': ['Rubik Mono One', 'sans-serif'],
        'marker': ['Permanent Marker', 'cursive'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', filter: 'blur(8px)' },
          '50%': { opacity: '0.8', filter: 'blur(12px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
    },
  },
  plugins: [],
}
