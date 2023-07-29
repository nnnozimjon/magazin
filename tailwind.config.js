/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      dark: '#1C1C1C',
      white: '#FFFFFF',
      'light-blue': '#E5F1FF',
      'gray-600': '#505050',
      'gray-500': '#8B96A5',
      'gray-400': '#BDC4CD',
      'gray-300': '#DEE2E7',
      'gray-200': '#EFF2F4',
      'gray-100': '#F7FAFC',
      'blue-100': '#E3F0FF',
      'blue-600': '#0D6EFD',
      'green-100': '#C3FFCB',
      'green-600': '#00B517',
      'orange-100': '#FFE5BF',
      'orange-600': '#FF9017',
      'red-600': '#FA3434',
    },
  },

  plugins: [],
}
