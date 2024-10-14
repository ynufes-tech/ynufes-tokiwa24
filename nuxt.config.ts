// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    baseURL: process.env.BASE_URL ? process.env.BASE_URL : '/',
    runtimeConfig: {
      baseURL: process.env.BASE_URL ? process.env.BASE_URL : '/',
    },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '24常盤祭 - 横浜国立大学大学祭' },
        {
          property: 'keywords',
          content:
            '常盤祭,横浜国立大学,大学祭,文化祭,横国,常磐祭,ときわさい,2024,秋,学祭,イベント,横浜',
        },
        // {property: 'og:image', content: 'localhost:3000/favicon.ico'},
        // {property: 'og:image:width', content: '1200'},
        // {property: 'og:image:height', content: '630'},
      ],
    },
  },
  modules: [
    'nuxt-gtag',
    '@nuxt/eslint',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Sawarabi Mincho': true,
        },
        preconnect: true,
        crossorigin: true,
        display: 'swap',
      },
    ],
  ],

  gtag: {
    id: 'G-0DCQSG7Y00',
  },
})