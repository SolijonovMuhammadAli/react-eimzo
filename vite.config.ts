// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

// Node.js modullari uchun polyfill plaginlarini import qilamiz
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ReactEimzoSolijonovmuhammadali',
      formats: ['es', 'cjs'],
      fileName: (format) => `react-eimzo-solijonovmuhammadali.${format === 'es' ? 'esm' : format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      plugins: [NodeGlobalsPolyfillPlugin({ buffer: true }), NodeModulesPolyfillPlugin()]
    }
  },
  resolve: { alias: { buffer: 'buffer' } },
  optimizeDeps: {
    esbuildOptions: {
      define: { global: 'globalThis' },
      plugins: [NodeGlobalsPolyfillPlugin({ buffer: true }), NodeModulesPolyfillPlugin()]
    }
  }
})
