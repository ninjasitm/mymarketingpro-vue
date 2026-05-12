// Stub for Nuxt's nuxt/app virtual module — used by Vitest only.
// The real nuxt/app is resolved by Nuxt's build layer at application runtime.

export function defineNuxtPlugin(plugin: (nuxtApp: unknown) => unknown) {
  return plugin
}

export function useRuntimeConfig() {
  return {
    public: {},
  }
}
