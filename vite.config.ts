import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import stylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylelint({
      formatter: 'compact'
    })
  ],
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})