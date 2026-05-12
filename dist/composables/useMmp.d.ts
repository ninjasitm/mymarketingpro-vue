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
export declare function useMmp(): {
    /** Initialises the tracker with the given pixel ID. */
    init: (pixelId: string) => void;
    /** Tracks a pageview. */
    trackPageview: () => void;
    /**
     * Tracks a custom event.
     *
     * @param event - Event name.
     * @param data  - Optional event payload.
     */
    track: (event: string, data?: Record<string, unknown>) => void;
    /** Low-level: issue any `mmp` command with arbitrary arguments. */
    call: (command: string, ...args: unknown[]) => void;
};
