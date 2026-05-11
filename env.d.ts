// Ambient type declarations for modules that are only available at runtime
// in a Nuxt application context.

// nuxt/app is a Nuxt virtual module resolved by Nuxt's build layer. These
// minimal declarations cover just what src/runtime/plugin.ts needs, so the
// library can be type-checked without installing nuxt as a dev dependency
// (which would pull in build tools with incompatible declaration files).
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
