import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hw-lesson3-m6/', 
  server: {
    port: 3000
  }
})