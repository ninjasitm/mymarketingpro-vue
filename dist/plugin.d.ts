import { Plugin } from 'vue';
import { MyMarketingProPluginOptions } from './types';

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
export declare function createMyMarketingPro(options?: MyMarketingProPluginOptions): Plugin;
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
export declare const MyMarketingProPlugin: Plugin;
export default MyMarketingProPlugin;
