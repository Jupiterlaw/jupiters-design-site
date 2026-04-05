import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:    '#F5F2EE',
        charcoal: '#1A1A1A',
        beige:    '#C8B89A',
        'beige-light': '#E8DFD0',
        'charcoal-light': '#2D2D2D',
      },
      fontFamily: {
        serif:  ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:   ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(4rem, 12vw, 14rem)',
        'display': 'clamp(3rem, 8vw, 8rem)',
        'headline': 'clamp(2rem, 5vw, 5rem)',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '700': '700ms',
        '900': '900ms',
      },
    },
  },
  plugins: [],
}
export default config
