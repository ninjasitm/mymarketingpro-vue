/**
 * Type of the `window.mmp` tracker function.
 * Supports command buffering via the `.q` queue before `pixel.js` loads.
 */
export type MmpFunction = ((...args: unknown[]) => void) & {
    q?: unknown[][];
};
/**
 * Window augmented with the MMP tracker globals.
 */
export type MmpWindow = typeof window & {
    mmp?: MmpFunction;
    MmpTracker?: string;
};
export interface MyMarketingProPluginOptions {
    /** Base URL for the MyMarketingPro API */
    baseUrl?: string;
    /** API key for authentication */
    apiKey?: string;
    /** Default locale */
    locale?: string;
    /**
     * MyMarketingPro site-visitor pixel ID (e.g. `"mmp_45a1659a044e96cf380015d4"`).
     * When provided the pixel script is injected automatically on plugin install.
     */
    pixelId?: string;
    /**
     * Whether to fire an initial `trackPageview` call immediately after injecting
     * the pixel. Defaults to `true` when `pixelId` is set. Set to `false` if you
     * want to call `useMmp().trackPageview()` manually (e.g. after router navigation).
     */
    trackPageview?: boolean;
}
/**
 * Return type of the {@link useMmp} composable.
 */
export interface UseMmpReturn {
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
}
export interface ApiResponse<T = unknown> {
    data: T;
    success: boolean;
    message?: string;
    errors?: string[];
}
/**
 * Pagination metadata
 */
export interface PaginationMeta {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
}
/**
 * Paginated API response
 */
export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
    meta: PaginationMeta;
}
