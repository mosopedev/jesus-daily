// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],
  compatibilityDate: "2024-07-13",
  plugins: ["~/plugins/vue-toast.js", ],
})