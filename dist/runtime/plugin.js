import { defineNuxtPlugin as m, useRuntimeConfig as n } from "nuxt/app";
import { createMyMarketingPro as r } from "../mymarketingpro-vue.js";
const a = m((p) => {
  var i, o;
  const e = n(), t = {
    baseUrl: (i = e.public) == null ? void 0 : i.mmpBaseUrl,
    apiKey: e.mmpApiKey,
    locale: (o = e.public) == null ? void 0 : o.mmpLocale
  };
  p.vueApp.use(r(t));
});
export {
  a as default
};
