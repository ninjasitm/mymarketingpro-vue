// Stub for @nuxt/kit — used by Vitest only.
// The real @nuxt/kit is only available in a Nuxt build context.

import { join } from 'node:path'

export function defineNuxtModule(definition: Record<string, unknown>) {
  return definition
}

export function addPlugin(_plugin: unknown) {
  // no-op in tests
}

export function createResolver(base: string | URL) {
  const basePath = base instanceof URL ? base.pathname : base
  return {
    resolve: (...paths: string[]) => join(basePath, ...paths),
  }
}
