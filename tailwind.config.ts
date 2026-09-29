import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        atelier: {
          surface: '#14121b',
          surfaceDim: '#0f0d16',
          surfaceContainer: '#1c1a24',
          surfaceHigh: '#262330',
          border: 'rgba(255, 255, 255, 0.08)',
          borderGlow: 'rgba(98, 44, 142, 0.35)',
          purple: '#622C8E',
          red: '#940548',
          neonGreen: '#B7F75B',
          cyan: '#00B0D8',
          textMuted: '#9e97af',
        },
      },
      fontFamily: {
        space: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 24px -4px rgba(98, 44, 142, 0.45)',
        'glow-cyan': '0 0 20px -3px rgba(0, 176, 216, 0.35)',
        'glow-green': '0 0 20px -3px rgba(183, 247, 91, 0.35)',
        'glow-red': '0 0 20px -3px rgba(148, 5, 72, 0.4)',
      },
      backgroundImage: {
        'witchy-radial': 'radial-gradient(ellipse at 50% -20%, rgba(98,44,142,0.25), transparent 70%)',
      },
    },
  },
  plugins: [],
}

export default config