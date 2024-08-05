/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        toggle: {
          '0%, 100%': { 
            transform: 'translateX(0px)',
            color: '#3b82f6', // Initial and final color (blue-500)
            boxShadow: '0 0 0px rgba(0,0,0,0)', // No shadow initially
          },
          '50%': { 
            transform: 'translateX(20px) scale(1.1)', // Move right and scale up
            color: '#10B981', // Change color to red-500 at the midpoint
            boxShadow: '0 10px 20px rgba(0,0,0,0.25)', // Add shadow at the midpoint
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        toggle: 'toggle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
