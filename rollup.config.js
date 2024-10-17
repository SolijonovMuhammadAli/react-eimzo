// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel'
import pkg from './package.json'

export default {
  input: ['src/index.ts', 'Eimzo.js', 'e-imzo.js', 'e-imzo-client.js'],
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          importHelpers: true,
          declaration: true,
          declarationDir: 'dist'
        }
      }
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    })
  ],
  external: ['react', 'react-dom']
}
