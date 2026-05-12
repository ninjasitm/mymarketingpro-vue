import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useMmp } from '../../src/composables/useMmp'

type MmpWindow = typeof window & { mmp?: ReturnType<typeof vi.fn> }

describe('useMmp', () => {
  beforeEach(() => {
    ;(window as MmpWindow).mmp = vi.fn()
  })

  it('returns init, trackPageview, track and call methods', () => {
    const mmp = useMmp()
    expect(typeof mmp.init).toBe('function')
    expect(typeof mmp.trackPageview).toBe('function')
    expect(typeof mmp.track).toBe('function')
    expect(typeof mmp.call).toBe('function')
  })

  it('init calls mmp("init", pixelId)', () => {
    const { init } = useMmp()
    init('mmp_test_id')
    expect((window as MmpWindow).mmp).toHaveBeenCalledWith('init', 'mmp_test_id')
  })

  it('trackPageview calls mmp("trackPageview")', () => {
    const { trackPageview } = useMmp()
    trackPageview()
    expect((window as MmpWindow).mmp).toHaveBeenCalledWith('trackPageview')
  })

  it('track calls mmp("track", event, data) when data is provided', () => {
    const { track } = useMmp()
    track('ButtonClick', { label: 'sign-up' })
    expect((window as MmpWindow).mmp).toHaveBeenCalledWith('track', 'ButtonClick', {
      label: 'sign-up',
    })
  })

  it('track calls mmp("track", event) without data when data is omitted', () => {
    const { track } = useMmp()
    track('ButtonClick')
    expect((window as MmpWindow).mmp).toHaveBeenCalledWith('track', 'ButtonClick')
  })

  it('call passes through any command and arguments', () => {
    const { call } = useMmp()
    call('customCommand', 'arg1', 'arg2')
    expect((window as MmpWindow).mmp).toHaveBeenCalledWith('customCommand', 'arg1', 'arg2')
  })

  it('is a no-op when window.mmp is not defined', () => {
    delete (window as MmpWindow).mmp
    const { trackPageview } = useMmp()
    expect(() => trackPageview()).not.toThrow()
  })
})
