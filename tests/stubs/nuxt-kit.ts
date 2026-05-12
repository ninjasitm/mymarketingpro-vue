// Stub for @nuxt/kit — used by Vitest only.
// The real @nuxt/kit is only available in a Nuxt build context.

import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

export function defineNuxtModule(definition: Record<string, unknown>) {
  return definition
}

export function addPlugin(_plugin: unknown) {
  // no-op in tests
}

export function createResolver(base: string | URL) {
  // Normalise file: URLs and URL objects to a filesystem path so that
  // path.join() produces valid results across platforms (including Windows
  // where URL.pathname would leave a leading `/` before the drive letter).
  const basePath =
    base instanceof URL
      ? fileURLToPath(base)
      : typeof base === 'string' && base.startsWith('file:')
        ? fileURLToPath(base)
        : base
  return {
    resolve: (...paths: string[]) => join(basePath, ...paths),
  }
}
