/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['src/pages/**/*.{js,ts,jsx,tsx}', 'src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    // screen breakpoints config
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    // color config
    colors: {
      // default colors
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',

      // custom colors
      // reds
      'red-1': '#FEE7EA',
      'red-2': '#FCB6C0',
      'red-3': '#FA8596',
      'red-4': '#F73B58',
      // red-5 => primary red
      'red-5': '#E60A2B',
      'red-6': '#AB0720',
      'red-7': '#620412',
      'red-8': '#FF0000',

      // greens
      'green-1': '#EAF8E7',
      'green-2': '#CBEEC3',
      'green-3': '#A8E39C',
      'green-4': '#73D260',
      // green-5 => primary green
      'green-5': '#46AE31',
      'green-6': '#388B27',
      'green-7': '#205016',

      // yellows
      'yellow-1': '#FEF7E1',
      'yellow-2': '#FDEDBE',
      'yellow-3': '#FCE08D',
      'yellow-4': '#FAD051',
      // yellow-5 => primary yellow
      'yellow-5': '#F9C320',
      'yellow-6': '#BD8F05',
      'yellow-7': '#634B03',

      // blues
      'blue-1': '#E1F3FF',
      'blue-2': '#B3E2FE',
      'blue-3': '#81CFFE',
      'blue-4': '#3FB6FD',
      // blue-5 => primary blue
      'blue-5': '#0EA3FD',
      'blue-6': '#016FB1',
      'blue-7': '#014065',

      // grays
      'gray-1': '#E6E6E6',
      'gray-2': '#DEDEDE',
      'gray-3': '#B3B3B3',
      'gray-4': '#A3A3A3',
      'gray-5': '#858585',
      // gray-6 is base font color
      'gray-6': '#1A1A1A',
      'gray-7': '#0F0F0F',
      //purple color
      'mainPurple' :'hsla(264, 44%, 35%, 1)'
    }
  },
  plugins: []
};
