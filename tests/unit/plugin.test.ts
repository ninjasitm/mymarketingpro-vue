import { describe, it, expect } from 'vitest'
import { createApp } from 'vue'
import { MyMarketingProPlugin } from '../../src'

describe('MyMarketingProPlugin', () => {
  it('installs without errors', () => {
    const app = createApp({})
    expect(() => app.use(MyMarketingProPlugin)).not.toThrow()
  })

  it('installs with options', () => {
    const app = createApp({})
    expect(() =>
      app.use(MyMarketingProPlugin, {
        baseUrl: 'https://api.mymarketingpro.com',
        apiKey: 'test-key',
      })
    ).not.toThrow()
  })

  it('provides options to app', () => {
    const app = createApp({})
    app.use(MyMarketingProPlugin, {
      baseUrl: 'https://api.mymarketingpro.com',
    })
    app.mount(document.createElement('div'))
    expect(app._context.provides['mymarketingpro-options']).toEqual({
      baseUrl: 'https://api.mymarketingpro.com',
    })
    app.unmount()
  })
})
