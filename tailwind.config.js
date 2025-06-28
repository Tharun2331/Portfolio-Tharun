/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-black': '#000000',
        'terminal-green': '#4ade80',
        'terminal-gray-900': '#111827',
        'terminal-gray-800': '#1f2937',
        'terminal-yellow': '#facc15',
        'terminal-blue': '#60a5fa',
        'terminal-red': '#f87171',
        'terminal-white': '#ffffff',
        'terminal-gray-700': '#374151',
        'terminal-gray-600': '#4b5563',
        'terminal-gray-300': '#d1d5db',
        'terminal-gray-400': '#9ca3af',
        'terminal-gray-500': '#6b7280',
        'terminal-purple': '#a78bfa',
      },
    },
  },
  plugins: [],
  // safelist: [
  //   'gap-4',
  //   'mt-4',
  //   'gap-x-4',
  //   'flex',
  //   'items-center',
  // ],
}