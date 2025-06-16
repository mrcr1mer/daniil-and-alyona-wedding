import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/daniil-and-alena-wedding/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    modules: {
      generateScopedName: "[hash:base64:5]",
      hashPrefix: " ",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/vars.scss";`
      }
    }
  }
})
