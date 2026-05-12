const m = "https://app.mymarketingpro.com/site-visitors/pixel.js";
function r(n) {
  if (typeof window > "u") return;
  const t = window;
  if (t.MmpTracker = "mmp", t.mmp = t.mmp || function(...e) {
    (t.mmp.q = t.mmp.q || []).push(e);
  }, !document.getElementById("mmp")) {
    const e = document.createElement("script");
    e.id = "mmp", e.src = m, e.async = !0, e.setAttribute("data-cfasync", "false");
    const i = document.getElementsByTagName("script")[0];
    i != null && i.parentNode ? i.parentNode.insertBefore(e, i) : document.head.appendChild(e);
  }
  t.mmp("init", n);
}
function a(n = {}) {
  return {
    install(t) {
      var e;
      t.provide("mymarketingpro-options", n), n.baseUrl && (t.config.globalProperties.$mmpBaseUrl = n.baseUrl), n.pixelId && (r(n.pixelId), n.trackPageview !== !1 && typeof window < "u" && ((e = window.mmp) == null || e.call(window, "trackPageview")));
    }
  };
}
const c = a();
export {
  m as M,
  c as a,
  a as c,
  r as i
};
