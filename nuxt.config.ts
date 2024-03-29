// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        flag: 'us',
        iso: 'en-US',
        file: 'en.json',
        name: 'English',
      },
      { code: 'pl', flag: 'pl', iso: 'pl-PL', file: 'pl.json', name: 'Polski' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      // cookieKey: 'locale',
      // fallbackLocale: 'en',
      alwaysRedirect: true,
      redirectOn: 'root',
    },
  },
});
