import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import httpProxy from "http-proxy"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Get env
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    server: {
      // proxy: {
      //   'ollama': {
      //     target: `http://localhost:${env.VITE_PORT}`,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/ollama/, '')
      //   }
      // },
      proxy: {
        '/api': {
          target: 'https://localhost:3001',
          changeOrigin: true,
          secure: false,
        }
      },
      cors: true,
      port: env.VITE_PORT || 3000
    }
  }
})