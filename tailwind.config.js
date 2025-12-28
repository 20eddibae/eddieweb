export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#F2F0EF',
        },
        text: {
          primary: '#000000',
          secondary: '#666666',
        },
        border: '#E5E5E5',
      },
      fontFamily: {
        sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
      },
      maxWidth: {
        content: '720px',
      },
      spacing: {
        '30': '7.5rem', // 120px for section spacing
      },
    },
  },
  plugins: [],
}

