// This file is the Nuxt plugin entryway for mymarketingpro-vue.
// Add it to your Nuxt app's plugins/ directory, or reference it in nuxt.config.ts:
//
//   export default defineNuxtConfig({
//     plugins: ['mymarketingpro-vue/nuxt']
//   })
//
// Runtime config keys read (all optional):
//   runtimeConfig.public.mmpBaseUrl  — public API base URL
//   runtimeConfig.public.mmpLocale   — default locale
//   runtimeConfig.mmpApiKey          — private API key (server-side only)

// #app is a Nuxt virtual module resolved at build time by Nuxt's Vite/Webpack layer.
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createMyMarketingPro } from './plugin'
import type { MyMarketingProPluginOptions } from './types'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const options: MyMarketingProPluginOptions = {
    baseUrl: runtimeConfig.public?.mmpBaseUrl as string | undefined,
    apiKey: runtimeConfig.mmpApiKey as string | undefined,
    locale: runtimeConfig.public?.mmpLocale as string | undefined,
  }

  nuxtApp.vueApp.use(createMyMarketingPro(options))
})
