import { describe, it, expect, beforeEach } from 'vitest'
import { injectMmpPixel, MMP_PIXEL_SCRIPT_URL } from '../../src/utils/pixel'

type MmpWindow = typeof window & {
  mmp?: ((...args: unknown[]) => void) & { q?: unknown[][] }
  MmpTracker?: string
}

describe('injectMmpPixel', () => {
  beforeEach(() => {
    const win = window as MmpWindow
    delete win.mmp
    delete win.MmpTracker
    document.querySelectorAll('#mmp').forEach((el) => el.remove())
  })

  it('sets window.MmpTracker to "mmp"', () => {
    injectMmpPixel('mmp_test_id')
    expect((window as MmpWindow).MmpTracker).toBe('mmp')
  })

  it('creates window.mmp as a function', () => {
    injectMmpPixel('mmp_test_id')
    expect(typeof (window as MmpWindow).mmp).toBe('function')
  })

  it('injects a script tag with the correct src, id, and attributes', () => {
    injectMmpPixel('mmp_test_id')
    const script = document.getElementById('mmp') as HTMLScriptElement | null
    expect(script).not.toBeNull()
    expect(script?.src).toBe(MMP_PIXEL_SCRIPT_URL)
    expect(script?.async).toBe(true)
    expect(script?.getAttribute('data-cfasync')).toBe('false')
  })

  it('queues the init command with the pixel id', () => {
    injectMmpPixel('mmp_test_id')
    const win = window as MmpWindow
    expect(win.mmp?.q).toBeDefined()
    expect(win.mmp!.q![0]).toEqual(['init', 'mmp_test_id'])
  })

  it('does not overwrite an existing window.mmp function', () => {
    const existing = Object.assign((..._args: unknown[]) => {}, {
      q: [] as unknown[][],
    })
    ;(window as MmpWindow).mmp = existing
    injectMmpPixel('mmp_test_id')
    expect((window as MmpWindow).mmp).toBe(existing)
  })

  it('does not inject a duplicate script tag on repeated calls', () => {
    injectMmpPixel('mmp_test_id')
    injectMmpPixel('mmp_test_id')
    expect(document.querySelectorAll('#mmp').length).toBe(1)
  })
})
