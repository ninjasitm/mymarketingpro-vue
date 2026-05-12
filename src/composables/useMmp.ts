type MmpFunction = ((...args: unknown[]) => void) & { q?: unknown[][] }
type MmpWindow = typeof window & { mmp?: MmpFunction }

/**
 * Composable for interacting with the MyMarketingPro tracking pixel (`window.mmp`).
 *
 * Provides typed helpers for common tracker commands and a low-level `call`
 * method for any command not explicitly covered.
 *
 * All methods are no-ops in SSR environments (when `window` is not defined)
 * and when `window.mmp` has not yet been initialised.
 *
 * @example
 * ```ts
 * import { useMmp } from 'mymarketingpro-vue'
 *
 * const { trackPageview, track } = useMmp()
 * trackPageview()
 * track('ButtonClick', { label: 'sign-up' })
 * ```
 */
export function useMmp() {
  /**
   * Low-level helper — calls `window.mmp(command, ...args)`.
   * Safe to call before the pixel script has finished loading; commands are
   * buffered by the queue set up in `injectMmpPixel`.
   */
  function call(command: string, ...args: unknown[]): void {
    if (typeof window === 'undefined') return
    const win = window as MmpWindow
    if (typeof win.mmp === 'function') {
      win.mmp(command, ...args)
    }
  }

  return {
    /** Initialises the tracker with the given pixel ID. */
    init: (pixelId: string): void => call('init', pixelId),

    /** Tracks a pageview. */
    trackPageview: (): void => call('trackPageview'),

    /**
     * Tracks a custom event.
     *
     * @param event - Event name.
     * @param data  - Optional event payload.
     */
    track: (event: string, data?: Record<string, unknown>): void =>
      data !== undefined ? call('track', event, data) : call('track', event),

    /** Low-level: issue any `mmp` command with arbitrary arguments. */
    call,
  }
}
