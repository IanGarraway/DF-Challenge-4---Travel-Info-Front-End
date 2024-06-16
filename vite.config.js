import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  test: {
    
    include: ['**/*.test.{js,jsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.js',
    
  },
  define: {
    'process.env': process.env
  }
})
