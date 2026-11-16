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
          green: '#0d5b47',
          'green-deep': '#073d31',
          'green-mid': '#1e705b',
          'green-light': '#2f8f74',
          'green-pale': '#d7efe7',
          'green-mist': '#f3faf7',
          'brown-dark': '#1a0f08',
          'brown-heading': '#3b1a0f',
          'brown-mid': '#c4855a',
          cream: '#f6f1e8',
          paper: '#fffdf8',
          yellow: '#f4c43a',
          coral: '#ec6841',
        },
      },
    },
  },
}

export default config
