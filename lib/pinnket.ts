export const PINNKET = {
  register5k: '#pinnket-register-5k', // replace with real URL
  register10k: '#pinnket-register-10k',
  register21k: '#pinnket-register-21k',
  register42k: '#pinnket-register-42k',
  shop: '#pinnket-shop',
} as const

export type PinnketKey = keyof typeof PINNKET
