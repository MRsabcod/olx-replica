import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
  optimizeDeps: {
    exclude: ['@maptiler/sdk']
  },
  server: {
    proxy:{
      '/ads': "http://localhost:3001",
      '/users': "http://localhost:3001"
    }
  },
  
})
