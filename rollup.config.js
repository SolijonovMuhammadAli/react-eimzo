const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')

module.exports = {
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },

  plugins: [resolve(), commonjs(), typescript()],
  external: ['react']
}
