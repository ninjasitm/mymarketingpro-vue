import { defineNuxtPlugin as m, useRuntimeConfig as n } from "#app";
import { createMyMarketingPro as r } from "./mymarketingpro-vue.js";
const l = m((t) => {
  var o, i;
  const e = n(), p = {
    baseUrl: (o = e.public) == null ? void 0 : o.mmpBaseUrl,
    apiKey: e.mmpApiKey,
    locale: (i = e.public) == null ? void 0 : i.mmpLocale
  };
  t.vueApp.use(r(p));
});
export {
  l as default
};
