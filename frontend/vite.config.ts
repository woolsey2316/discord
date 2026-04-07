import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Required for HMR on some systems (e.g., Windows/WSL)
    },
    host: true, // Exposes the server to your network
    strictPort: true,
    port: 5173,
  },
})
