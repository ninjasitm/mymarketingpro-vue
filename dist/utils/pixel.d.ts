/** URL of the MyMarketingPro site-visitor tracking pixel script. */
export declare const MMP_PIXEL_SCRIPT_URL = "https://app.mymarketingpro.com/site-visitors/pixel.js";
/**
 * Injects the MyMarketingPro tracking pixel script into the page.
 *
 * Sets up the `window.mmp` command queue so that calls made before the
 * script finishes loading are buffered and replayed automatically. Loads
 * `pixel.js` asynchronously, then queues `mmp("init", pixelId)`.
 *
 * Safe to call in SSR environments — returns immediately when `window` is
 * not defined.
 *
 * @param pixelId - Site-specific pixel ID, e.g. `"mmp_45a1659a044e96cf380015d4"`.
 *
 * @example
 * ```ts
 * import { injectMmpPixel } from 'mymarketingpro-vue'
 * injectMmpPixel('mmp_45a1659a044e96cf380015d4')
 * ```
 */
export declare function injectMmpPixel(pixelId: string): void;
