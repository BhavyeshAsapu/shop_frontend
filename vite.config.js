import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/frontapp1/',   // or '/' if deployed as ROOT.war
  server: {
    port: 2004,
    proxy: {
      '/admin': {
        target: 'http://localhost:9090/backendapp',
        changeOrigin: true,
      },
      '/address': {
        target: 'http://localhost:9090/backendapp',
        changeOrigin: true,
      },
    },
  },
})
