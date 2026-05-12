import { defineNuxtPlugin as t, useRuntimeConfig as n } from "nuxt/app";
import { c as u } from "../plugin-BhnOW6Gp.js";
const s = t((m) => {
  var i, p, o;
  const e = n(), l = {
    baseUrl: (i = e.public) == null ? void 0 : i.mmpBaseUrl,
    pixelId: ((p = e.public) == null ? void 0 : p.mmpPixelId) ?? e.mmpApiKey,
    locale: (o = e.public) == null ? void 0 : o.mmpLocale
  };
  m.vueApp.use(u(l));
});
export {
  s as default
};
