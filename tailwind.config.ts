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
          green: '#1A6B3A',
          'green-deep': '#0D3D22',
          'green-mid': '#2D8C52',
          'green-light': '#5CB87A',
          'green-pale': '#C2EDD2',
          'green-mist': '#EAF7EF',
          'brown-dark': '#3B1A0F',
          'brown-heading': '#6B2D1B',
          'brown-mid': '#C4855A',
          cream: '#F5EDE0',
        },
      },
    },
  },
}

export default config
