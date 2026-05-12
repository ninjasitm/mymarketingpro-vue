/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      include: ['src/**/*.ts', 'src/**/*.vue'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/src/', '/'),
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: {
        'mymarketingpro-vue': resolve(__dirname, 'src/index.ts'),
        nuxt: resolve(__dirname, 'src/nuxt.ts'),
        'runtime/plugin': resolve(__dirname, 'src/runtime/plugin.ts'),
      },
      name: 'MyMarketingProVue',
    },
    rollupOptions: {
      external: ['vue', 'nuxt/app', '@nuxt/kit'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      'nuxt/app': resolve(__dirname, 'tests/stubs/nuxt-app.ts'),
      '@nuxt/kit': resolve(__dirname, 'tests/stubs/nuxt-kit.ts'),
    },
  },
})
