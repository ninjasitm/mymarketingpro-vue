import { defineNuxtPlugin as m, useRuntimeConfig as n } from "nuxt/app";
import { c as u } from "../plugin-BhnOW6Gp.js";
const s = m((l) => {
  var i, o, p;
  const e = n(), t = {
    baseUrl: (i = e.public) == null ? void 0 : i.mmpBaseUrl,
    pixelId: (o = e.public) == null ? void 0 : o.mmpPixelId,
    locale: (p = e.public) == null ? void 0 : p.mmpLocale
  };
  l.vueApp.use(u(t));
});
export {
  s as default
};
