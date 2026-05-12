// Ambient type declaration for Nuxt's `nuxt/app` virtual module.
// This shim covers just what src/runtime/plugin.ts needs so the library can
// be type-checked (and declaration files generated) without installing nuxt
// as a devDependency (which pulls in build tools with incompatible .d.mts
// declaration syntax).
// Nuxt's own build pipeline resolves `nuxt/app` at application build time.

declare module 'nuxt/app' {
  import type { App } from 'vue'

  interface NuxtApp {
    vueApp: App
  }

  type RuntimeConfig = {
    public: Record<string, unknown>
    [key: string]: unknown
  }

  export function defineNuxtPlugin(
    setup: (nuxtApp: NuxtApp) => void | unknown,
  ): (nuxtApp: NuxtApp) => void | unknown

  export function useRuntimeConfig(): RuntimeConfig
}
