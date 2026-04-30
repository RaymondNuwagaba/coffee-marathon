import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D92B2B',
          gold: '#F5C518',
          black: '#1A1A1A',
          orange: '#E8651A',
          green: '#2E7D32',
          cream: '#FFF8EE',
          warmwhite: '#FFFDF7',
          brown: '#5C3317',
        },
      },
    },
  },
}

export default config
