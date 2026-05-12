import { M as c, a as f, c as u, a as M, i as P } from "./plugin-dshG9N5R.js";
function a() {
  function t(i, ...n) {
    if (typeof window > "u") return;
    const e = window;
    typeof e.mmp == "function" && e.mmp(i, ...n);
  }
  return {
    /** Initialises the tracker with the given pixel ID. */
    init: (i) => t("init", i),
    /** Tracks a pageview. */
    trackPageview: () => t("trackPageview"),
    /**
     * Tracks a custom event.
     *
     * @param event - Event name.
     * @param data  - Optional event payload.
     */
    track: (i, n) => n !== void 0 ? t("track", i, n) : t("track", i),
    /** Low-level: issue any `mmp` command with arbitrary arguments. */
    call: t
  };
}
export {
  c as MMP_PIXEL_SCRIPT_URL,
  f as MyMarketingProPlugin,
  u as createMyMarketingPro,
  M as default,
  P as injectMmpPixel,
  a as useMmp
};
