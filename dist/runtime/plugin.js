import { defineNuxtPlugin as m, useRuntimeConfig as n } from "nuxt/app";
import { c as r } from "../plugin-dshG9N5R.js";
const l = m((p) => {
  var i, o;
  const e = n(), t = {
    baseUrl: (i = e.public) == null ? void 0 : i.mmpBaseUrl,
    apiKey: e.mmpApiKey,
    locale: (o = e.public) == null ? void 0 : o.mmpLocale
  };
  p.vueApp.use(r(t));
});
export {
  l as default
};
