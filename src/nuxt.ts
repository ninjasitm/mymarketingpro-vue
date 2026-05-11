// Nuxt module for mymarketingpro-vue.
// Add it to your Nuxt app's modules array in nuxt.config.ts:
//
//   export default defineNuxtConfig({
//     modules: ['mymarketingpro-vue/nuxt']
//   })
//
// Runtime config keys read by the plugin (all optional):
//   runtimeConfig.public.mmpBaseUrl  — public API base URL
//   runtimeConfig.public.mmpLocale   — default locale
//   runtimeConfig.mmpApiKey          — private API key (server-side only)

import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'mymarketingpro-vue',
    configKey: 'myMarketingPro',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)
    // Registers the runtime plugin. Nuxt processes this file through its own
    // Vite build layer, fully resolving the `nuxt/app` virtual module imports.
    addPlugin(resolve('./runtime/plugin'))
  },
})
