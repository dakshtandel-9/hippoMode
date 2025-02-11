import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // Use dynamic port if available, fallback to 3000
    host: '0.0.0.0',  // Listen on all network interfaces
  },
})
