import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/frontapp1/',   // 👈 matches Tomcat frontend context path
  server: {
    proxy: {
      // Forward API requests from frontend (2004) to backend (9090)
      '/admin': {
        target: 'http://localhost:9090/backendapp',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/admin/, '/admin'),
      },
    },
  },
})
