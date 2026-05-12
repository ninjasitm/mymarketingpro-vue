import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createApp } from 'vue'
import { createMyMarketingPro, MyMarketingProPlugin } from '../../src'
import type { MmpWindow } from '../../src/types'
import * as nuxtAppModule from 'nuxt/app'

// nuxt/app is aliased to the stub in vitest config
import runtimePlugin from '../../src/runtime/plugin'
// @nuxt/kit is aliased to the stub in vitest config
import nuxtModule from '../../src/nuxt'

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

describe('createMyMarketingPro — pixel injection', () => {
  beforeEach(() => {
    const win = window as MmpWindow
    delete win.mmp
    delete win.MmpTracker
    document.querySelectorAll('#mmp').forEach((el) => el.remove())
  })

  it('injects the pixel script when pixelId is provided', () => {
    const app = createApp({})
    app.use(createMyMarketingPro({ pixelId: 'mmp_test_123' }))
    expect(document.getElementById('mmp')).not.toBeNull()
  })

  it('sets window.MmpTracker when pixelId is provided', () => {
    const app = createApp({})
    app.use(createMyMarketingPro({ pixelId: 'mmp_test_123' }))
    expect((window as MmpWindow).MmpTracker).toBe('mmp')
  })

  it('queues trackPageview by default when pixelId is provided', () => {
    const app = createApp({})
    app.use(createMyMarketingPro({ pixelId: 'mmp_test_123' }))
    const win = window as MmpWindow
    const commands = win.mmp?.q?.map((args) => args[0])
    expect(commands).toContain('init')
    expect(commands).toContain('trackPageview')
  })

  it('skips trackPageview when trackPageview option is false', () => {
    const app = createApp({})
    app.use(createMyMarketingPro({ pixelId: 'mmp_test_123', trackPageview: false }))
    const win = window as MmpWindow
    const commands = win.mmp?.q?.map((args) => args[0])
    expect(commands).toContain('init')
    expect(commands).not.toContain('trackPageview')
  })

  it('does not inject the pixel script when pixelId is omitted', () => {
    const app = createApp({})
    app.use(createMyMarketingPro({ baseUrl: 'https://api.mymarketingpro.com' }))
    expect(document.getElementById('mmp')).toBeNull()
    expect((window as MmpWindow).mmp).toBeUndefined()
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

describe('Nuxt module (src/nuxt.ts)', () => {
  it('is a Nuxt module definition with correct meta', () => {
    const mod = nuxtModule as Record<string, unknown>
    expect(mod).toHaveProperty('meta')
    const meta = mod.meta as Record<string, unknown>
    expect(meta.name).toBe('mymarketingpro-vue')
    expect(meta.configKey).toBe('myMarketingPro')
  })

  it('has a setup function that registers the runtime plugin', () => {
    const mod = nuxtModule as Record<string, unknown>
    expect(typeof mod.setup).toBe('function')
  })
})

describe('Nuxt runtime plugin (src/runtime/plugin.ts)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('calls vueApp.use with the plugin created from runtime config', () => {
    const useSpy = vi.fn()
    const nuxtApp = {
      vueApp: { use: useSpy },
    }

    runtimePlugin(nuxtApp as never)

    expect(useSpy).toHaveBeenCalledOnce()
    const [installedPlugin] = useSpy.mock.calls[0]
    expect(installedPlugin).toHaveProperty('install')
  })

  it('maps runtimeConfig.public.mmpPixelId to plugin pixelId', () => {
    vi.spyOn(nuxtAppModule, 'useRuntimeConfig').mockReturnValue({
      public: {
        mmpPixelId: 'mmp_public_pixel_id',
      },
      mmpApiKey: 'legacy_pixel_id',
    })

    const app = createApp({})
    const useSpy = vi.spyOn(app, 'use')
    runtimePlugin({ vueApp: app } as never)

    expect(useSpy).toHaveBeenCalledOnce()
    expect(app._context.provides['mymarketingpro-options']).toMatchObject({
      pixelId: 'mmp_public_pixel_id',
    })
  })

  it('falls back to runtimeConfig.mmpApiKey when mmpPixelId is missing', () => {
    vi.spyOn(nuxtAppModule, 'useRuntimeConfig').mockReturnValue({
      public: {},
      mmpApiKey: 'legacy_pixel_id',
    })

    const app = createApp({})
    runtimePlugin({ vueApp: app } as never)

    expect(app._context.provides['mymarketingpro-options']).toMatchObject({
      pixelId: 'legacy_pixel_id',
    })
  })
})
