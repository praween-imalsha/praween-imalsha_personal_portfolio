
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-soft': 'rgb(var(--color-accent-soft) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        subtle: 'rgb(var(--color-subtle) / <alpha-value>)',
      },
      boxShadow: {
        'soft': '0 4px 40px -2px rgb(var(--color-shadow) / 0.08)',
        'float': '0 20px 50px -8px rgb(var(--color-shadow) / 0.15)',
        'glow': '0 0 40px -4px rgb(var(--color-accent) / 0.4)',
      }
    },
  },
  plugins: [],
}
