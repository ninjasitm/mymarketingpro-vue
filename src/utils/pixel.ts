import type { MmpFunction, MmpWindow } from '../types'

/** URL of the MyMarketingPro site-visitor tracking pixel script. */
export const MMP_PIXEL_SCRIPT_URL =
  'https://app.mymarketingpro.com/site-visitors/pixel.js'

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
export function injectMmpPixel(pixelId: string): void {
  if (typeof window === 'undefined') return

  const win = window as MmpWindow

  // Set the tracker name and initialise the command queue
  win.MmpTracker = 'mmp'
  win.mmp =
    win.mmp ||
    function (...args: unknown[]) {
      ;(win.mmp!.q = win.mmp!.q || []).push(args)
    }

  // Inject the async <script> tag before the first existing script (only once)
  if (!document.getElementById('mmp')) {
    const script = document.createElement('script')
    script.id = 'mmp'
    script.src = MMP_PIXEL_SCRIPT_URL
    script.async = true
    script.setAttribute('data-cfasync', 'false')

    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    } else {
      document.head.appendChild(script)
    }
  }

  // Queue the init command (will execute once pixel.js loads)
  win.mmp('init', pixelId)
}
