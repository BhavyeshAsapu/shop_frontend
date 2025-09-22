import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 🚀 Vite config for both dev (2004) and prod (Tomcat)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Base path → must match frontend context path in Tomcat
  base: '/frontapp1/',   // change to '/' if deployed as ROOT.war instead

  server: {
    port: 2004,   // frontend dev server port
    proxy: {
      // Forward API requests from frontend → backend
      '/admin': {
        target: 'http://localhost:9090/backendapp',
        changeOrigin: true,
      },
      '/address': {
        target: 'http://localhost:9090/backendapp',
        changeOrigin: true,
      },
      // (add other backend routes here if needed)
    },
  },
})
