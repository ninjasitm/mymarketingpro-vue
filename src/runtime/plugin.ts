// Runtime Nuxt plugin registered by src/nuxt.ts via @nuxt/kit's addPlugin.
// Nuxt processes this file through its own Vite build layer, which resolves
// the `nuxt/app` import as a virtual module — no bare `#app` specifier is
// ever exposed in the published dist.

import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import { createMyMarketingPro } from '../plugin'
import type { MyMarketingProPluginOptions } from '../types'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const options: MyMarketingProPluginOptions = {
    baseUrl: runtimeConfig.public?.mmpBaseUrl as string | undefined,
    apiKey: runtimeConfig.mmpApiKey as string | undefined,
    locale: runtimeConfig.public?.mmpLocale as string | undefined,
  }

  nuxtApp.vueApp.use(createMyMarketingPro(options))
})
