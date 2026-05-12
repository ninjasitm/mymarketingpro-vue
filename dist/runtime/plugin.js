import { defineNuxtPlugin as n, useRuntimeConfig as c } from "nuxt/app";
import { c as u } from "../plugin-BhnOW6Gp.js";
const a = n((l) => {
  var i, o, p;
  const e = c(), m = e.mmpApiKey, t = {
    baseUrl: (i = e.public) == null ? void 0 : i.mmpBaseUrl,
    pixelId: ((o = e.public) == null ? void 0 : o.mmpPixelId) ?? m,
    locale: (p = e.public) == null ? void 0 : p.mmpLocale
  };
  l.vueApp.use(u(t));
});
export {
  a as default
};
