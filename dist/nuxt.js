import { defineNuxtModule as t, createResolver as o, addPlugin as r } from "@nuxt/kit";
const n = t({
  meta: {
    name: "mymarketingpro-vue",
    configKey: "myMarketingPro",
    compatibility: {
      nuxt: ">=3.0.0"
    }
  },
  setup() {
    const { resolve: e } = o(import.meta.url);
    r(e("./runtime/plugin"));
  }
});
export {
  n as default
};
