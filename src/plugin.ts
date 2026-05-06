import type { App, Plugin } from 'vue'
import type { MyMarketingProPluginOptions } from './types'

const MyMarketingProPlugin: Plugin = {
  install(app: App, options: MyMarketingProPluginOptions = {}) {
    // Store plugin options globally
    app.provide('mymarketingpro-options', options)

    // Register global components here when added
    // e.g., app.component('MmpComponent', MmpComponent)

    // Register global properties
    if (options.baseUrl) {
      app.config.globalProperties.$mmpBaseUrl = options.baseUrl
    }
  },
}

export default MyMarketingProPlugin
