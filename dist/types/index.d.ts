/**
 * Options for the MyMarketingPro Vue plugin
 */
export interface MyMarketingProPluginOptions {
    /** Base URL for the MyMarketingPro API */
    baseUrl?: string;
    /** API key for authentication */
    apiKey?: string;
    /** Default locale */
    locale?: string;
}
/**
 * API response wrapper
 */
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
