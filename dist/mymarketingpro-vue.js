function a(r = {}) {
  return {
    install(e) {
      e.provide("mymarketingpro-options", r), r.baseUrl && (e.config.globalProperties.$mmpBaseUrl = r.baseUrl);
    }
  };
}
const t = a();
export {
  t as MyMarketingProPlugin,
  a as createMyMarketingPro,
  t as default
};
