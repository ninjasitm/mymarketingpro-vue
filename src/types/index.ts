/**
 * Options for the MyMarketingPro Vue plugin
 */
export interface MyMarketingProPluginOptions {
  /** Base URL for the MyMarketingPro API */
  baseUrl?: string
  /** API key for authentication */
  apiKey?: string
  /** Default locale */
  locale?: string
  /**
   * MyMarketingPro site-visitor pixel ID (e.g. `"mmp_45a1659a044e96cf380015d4"`).
   * When provided the pixel script is injected automatically on plugin install.
   */
  pixelId?: string
  /**
   * Whether to fire an initial `trackPageview` call immediately after injecting
   * the pixel. Defaults to `true` when `pixelId` is set. Set to `false` if you
   * want to call `useMmp().trackPageview()` manually (e.g. after router navigation).
   */
  trackPageview?: boolean
}

/**
 * API response wrapper
 */
export interface ApiResponse<T = unknown> {
  data: T
  success: boolean
  message?: string
  errors?: string[]
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  currentPage: number
  lastPage: number
  perPage: number
  total: number
}

/**
 * Paginated API response
 */
export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  meta: PaginationMeta
}
