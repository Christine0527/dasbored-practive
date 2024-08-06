import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue(),
    vueDevTools(),
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 服務器配置
  server: {
    // 啟動服務器自動開瀏覽器
    open: true,
    // 服務器端口8081
    port: 8081,

    proxy: {
      '/api': {
        // 需要代理的路徑   例如 '/api'
        // 代理目標
        target: 'https://pan.baidu.com/s/1tTaN3eZheUpVW0_HX2lm_A', // 代理到 目標路徑
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
