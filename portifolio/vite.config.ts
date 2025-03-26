import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src' 
    }
  },
  server: {
    host: true,        
    port: 5173,        
    strictPort: true,  
    open: true         
  },
  build: {
    outDir: 'dist',   
    sourcemap: true,   
    minify: 'terser',  
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'] 
        }
      }
    }
  },
  define: {
    'process.env': {} 
  }
})