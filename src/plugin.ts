import type { App, Plugin } from 'vue'
import type { MyMarketingProPluginOptions, MmpWindow } from './types'
import { injectMmpPixel } from './utils/pixel'

/**
 * Creates a configured instance of the MyMarketingPro Vue plugin.
 *
 * @param options - Plugin configuration options
 * @returns A Vue plugin instance ready to be passed to `app.use()`
 *
 * @example
 * ```ts
 * import { createMyMarketingPro } from 'mymarketingpro-vue'
 *
 * const app = createApp(App)
 * app.use(createMyMarketingPro({ baseUrl: 'https://api.mymarketingpro.com', apiKey: 'key' }))
 * ```
 */
export function createMyMarketingPro(options: MyMarketingProPluginOptions = {}): Plugin {
  return {
    install(app: App) {
      // Make options available to all child components via inject()
      app.provide('mymarketingpro-options', options)

      // Register global components here when added
      // e.g., app.component('MmpButton', MmpButton)

      // Expose convenience global properties
      if (options.baseUrl) {
        app.config.globalProperties.$mmpBaseUrl = options.baseUrl
      }

      // Inject the tracking pixel when a pixelId is provided
      if (options.pixelId) {
        injectMmpPixel(options.pixelId)

        if (options.trackPageview !== false && typeof window !== 'undefined') {
          ;(window as MmpWindow).mmp?.('trackPageview')
        }
      }
    },
  }
}

/**
 * Pre-built plugin instance with default (empty) options, provided for
 * simpler setups where you do not need to pass configuration at creation time.
 *
 * @example
 * ```ts
 * import { MyMarketingProPlugin } from 'mymarketingpro-vue'
 *
 * app.use(MyMarketingProPlugin)
 * // options can be supplied later via provide/inject
 * ```
 */
export const MyMarketingProPlugin: Plugin = createMyMarketingPro()


export default MyMarketingProPlugin
