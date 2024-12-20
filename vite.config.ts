import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,        // Specify a starting port (default is 5173)
    strictPort: false, // Allow Vite to find the next available port
    host: 'localhost'  // Ensure the server binds to localhost
  },
})
