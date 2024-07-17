import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-'),
      },
    },
  })],
  resolve: {
    alias: {
      '#': resolve(__dirname, './src/'),
      '#assets': resolve(__dirname, './src/assets'),
      '#components': resolve(__dirname, './src/components'),
      '#composables': resolve(__dirname, './src/composables'),
      '#layouts': resolve(__dirname, './src/layouts'),
      '#types': resolve(__dirname, './src/types'),
      '#pages': resolve(__dirname, './src/pages'),
    },
  },
})
