// Stub for @nuxt/kit — used by Vitest only.
// The real @nuxt/kit is only available in a Nuxt build context.

export function defineNuxtModule(definition: Record<string, unknown>) {
  return definition
}

export function addPlugin(_plugin: unknown) {
  // no-op in tests
}

export function createResolver(_base: string | URL) {
  return {
    resolve: (...paths: string[]) => paths.join('/'),
  }
}
