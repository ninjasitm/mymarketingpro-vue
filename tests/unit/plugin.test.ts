import { describe, it, expect, vi } from 'vitest'
import { createApp } from 'vue'
import { createMyMarketingPro, MyMarketingProPlugin } from '../../src'

describe('createMyMarketingPro', () => {
  it('returns an installable Vue plugin', () => {
    const plugin = createMyMarketingPro()
    expect(plugin).toHaveProperty('install')
    expect(typeof plugin.install).toBe('function')
  })

  it('installs without errors when no options provided', () => {
    const app = createApp({})
    expect(() => app.use(createMyMarketingPro())).not.toThrow()
  })

  it('installs with options', () => {
    const app = createApp({})
    expect(() =>
      app.use(
        createMyMarketingPro({
          baseUrl: 'https://api.mymarketingpro.com',
          apiKey: 'test-key',
        })
      )
    ).not.toThrow()
  })

  it('provides options to the app via inject key', () => {
    const app = createApp({})
    const opts = { baseUrl: 'https://api.mymarketingpro.com', apiKey: 'k' }
    app.use(createMyMarketingPro(opts))
    app.mount(document.createElement('div'))
    expect(app._context.provides['mymarketingpro-options']).toEqual(opts)
    app.unmount()
  })

  it('sets $mmpBaseUrl global property when baseUrl is provided', () => {
    const app = createApp({})
    app.use(createMyMarketingPro({ baseUrl: 'https://api.mymarketingpro.com' }))
    expect(app.config.globalProperties.$mmpBaseUrl).toBe('https://api.mymarketingpro.com')
  })

  it('does not set $mmpBaseUrl when baseUrl is omitted', () => {
    const app = createApp({})
    app.use(createMyMarketingPro())
    expect(app.config.globalProperties.$mmpBaseUrl).toBeUndefined()
  })

  it('creates independent plugin instances with separate options', () => {
    const app1 = createApp({})
    const app2 = createApp({})
    app1.use(createMyMarketingPro({ baseUrl: 'https://one.example.com' }))
    app2.use(createMyMarketingPro({ baseUrl: 'https://two.example.com' }))
    expect(app1.config.globalProperties.$mmpBaseUrl).toBe('https://one.example.com')
    expect(app2.config.globalProperties.$mmpBaseUrl).toBe('https://two.example.com')
  })
})

describe('MyMarketingProPlugin (default instance)', () => {
  it('installs without errors', () => {
    const app = createApp({})
    expect(() => app.use(MyMarketingProPlugin)).not.toThrow()
  })

  it('provides empty options object', () => {
    const app = createApp({})
    app.use(MyMarketingProPlugin)
    app.mount(document.createElement('div'))
    expect(app._context.provides['mymarketingpro-options']).toEqual({})
    app.unmount()
  })
})

describe('Nuxt plugin entryway (src/nuxt.ts)', () => {
  it('calls vueApp.use with the plugin created from runtime config', async () => {
    const useSpy = vi.fn()
    const nuxtApp = {
      vueApp: { use: useSpy },
    }

    // Stub #app before dynamic import
    vi.doMock('#app', () => ({
      defineNuxtPlugin: (fn: (app: typeof nuxtApp) => void) => fn,
      useRuntimeConfig: () => ({
        public: { mmpBaseUrl: 'https://cfg.example.com', mmpLocale: 'en' },
        mmpApiKey: 'cfg-key',
      }),
    }))

    const { default: nuxtPlugin } = await import('../../src/nuxt')
    nuxtPlugin(nuxtApp as never)

    expect(useSpy).toHaveBeenCalledOnce()
    const [installedPlugin] = useSpy.mock.calls[0]
    expect(installedPlugin).toHaveProperty('install')
  })
})
