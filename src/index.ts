import { Buffer } from 'buffer'

if (typeof window !== 'undefined') {
  ;(window as any).Buffer = Buffer
}

if (typeof global === 'undefined') {
  window.global = window
}

global.Buffer = Buffer

export { useEImzo } from './useEImzo'
