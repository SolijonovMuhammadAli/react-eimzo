// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  assetsInclude: ['**/e-imzo.js'], // e-imzo.js faylini assets sifatida qo'shdik
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
      }
    }
  }
})
