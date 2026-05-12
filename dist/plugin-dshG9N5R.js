const m = "https://app.mymarketingpro.com/site-visitors/pixel.js";
function r(i) {
  if (typeof window > "u") return;
  const t = window;
  if (t.MmpTracker = "mmp", t.mmp = t.mmp || function(...e) {
    (t.mmp.q = t.mmp.q || []).push(e);
  }, !document.getElementById("mmp")) {
    const e = document.createElement("script");
    e.id = "mmp", e.src = m, e.async = !0, e.setAttribute("data-cfasync", "false");
    const n = document.getElementsByTagName("script")[0];
    n != null && n.parentNode ? n.parentNode.insertBefore(e, n) : document.head.appendChild(e);
  }
  t.mmp("init", i);
}
function a(i = {}) {
  return {
    install(t) {
      var e;
      if (t.provide("mymarketingpro-options", i), i.baseUrl && (t.config.globalProperties.$mmpBaseUrl = i.baseUrl), i.pixelId && (r(i.pixelId), i.trackPageview !== !1 && typeof window < "u")) {
        const n = window;
        (e = n.mmp) == null || e.call(n, "trackPageview");
      }
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
