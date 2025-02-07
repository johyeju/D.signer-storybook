/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        // Title
        'title-12-regular': ['12px', { lineHeight: 'auto', fontWeight: '400' }],
        'title-12-medium': ['12px', { lineHeight: 'auto', fontWeight: '500' }],
        'title-12-semibold': [
          '12px',
          { lineHeight: 'auto', fontWeight: '600' },
        ],

        'title-13-semibold': [
          '13px',
          { lineHeight: 'auto', fontWeight: '600' },
        ],

        'title-14-regular': ['14px', { lineHeight: 'auto', fontWeight: '400' }],
        'title-14-medium': ['14px', { lineHeight: 'auto', fontWeight: '500' }],

        'title-16-regular': ['16px', { lineHeight: 'auto', fontWeight: '400' }],
        'title-16-medium': ['16px', { lineHeight: 'auto', fontWeight: '500' }],
        'title-16-semibold': [
          '16px',
          { lineHeight: 'auto', fontWeight: '600' },
        ],

        'title-18-medium': ['18px', { lineHeight: 'auto', fontWeight: '500' }],
        'title-18-semibold': [
          '18px',
          { lineHeight: 'auto', fontWeight: '600' },
        ],

        'title-20-medium': ['20px', { lineHeight: 'auto', fontWeight: '500' }],
        'title-20-semibold': [
          '20px',
          { lineHeight: 'auto', fontWeight: '600' },
        ],

        // Body
        'body-13-regular-110': [
          '13px',
          { lineHeight: '110%', fontWeight: '400' },
        ],
        'body-13-regular-auto': [
          '13px',
          { lineHeight: 'auto', fontWeight: '400' },
        ],

        'body-14-regular': ['14px', { lineHeight: 'auto', fontWeight: '400' }],
        'body-14-semibold': ['14px', { lineHeight: 'auto', fontWeight: '600' }],

        'body-15-bold': ['15px', { lineHeight: 'auto', fontWeight: '700' }],

        'body-16-regular-135': [
          '16px',
          { lineHeight: '135%', fontWeight: '400' },
        ],
        'body-16-medium': ['16px', { lineHeight: 'auto', fontWeight: '500' }],

        // Caption
        'caption-10-regular': [
          '10px',
          { lineHeight: 'auto', fontWeight: '400' },
        ],
        'caption-12-regular': [
          '12px',
          { lineHeight: 'auto', fontWeight: '400' },
        ],
        'caption-16-regular': [
          '16px',
          { lineHeight: 'auto', fontWeight: '400' },
        ],
      },
      colors: {
        primary: '#1d2745',
        secondary: '#1de5d4',
        tertiary: '#f52c50',
        white: '#ffffff',
        mono100: '#f1f1f1',
        error: '#d01e1e',
        social: '#395997',
      },
    },
  },
  plugins: [],
};
