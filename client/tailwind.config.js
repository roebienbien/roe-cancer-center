/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B', // main brand
        accent: '#22C55E', // success / actions
        danger: '#EF4444', // errors
        warning: '#F59E0B',

        surface: '#FFFFFF', // cards, inputs
        background: '#F8FAFC', // page bg

        text: {
          primary: '#0F172A',
          secondary: '#64748B',
        },
      },
    },
  },
  plugins: [],
};
