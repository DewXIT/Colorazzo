export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        footer: '#1e1e1e',
      },
    },
  },
  plugins: [],
}
