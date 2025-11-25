/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: 'hsl(var(--primary))',
        'brand-foreground': 'hsl(var(--primary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        // hero display size (used on md+)
        hero: ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero-sm': ['3rem', { lineHeight: '1.05' }],
      },
      boxShadow: {
        'hero': '0 25px 50px -12px rgba(0,0,0,0.25)',
        'btn': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)'
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
