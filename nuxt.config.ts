// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Vinawebapp.com - Thiết kế website chuyên nghiệp',
      link: [{ rel: 'icon', type: 'image/png', href: './favicon.png' }],
      meta: [

        { property: 'title', content: 'Vinawebapp.com - Thiết Kế Website Chuyên Nghiệp' },
        { property: 'og:title', content: 'Vinawebapp.com - Thiết Kế Website Chuyên Nghiệp' },
        { property: 'description', content: 'Một Công Ty Thiết Kế Website Đi Trước Thời Đại Nhiều Năm Ánh Sáng' },
        { property: 'og:description', content: 'Một Công Ty Thiết Kế Website Đi Trước Thời Đại Nhiều Năm Ánh Sáng' },
        { property: 'image', content: '@/assets/img/https://www.vinawebapp.com/meta_image.png' },
        { property: 'og:image', content: '@/assets/img/https://www.vinawebapp.com/meta_image.png' },
        { property: 'keywords', content: 'thiết kế web, web, 3d, công nghệ, thiết kế webiste, website, vinawebapp.com, vinawebapp' },
        { property: 'twitterCard', content: 'summary_large_image' },

      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/turnstile',
    'nuxt-icon',
    'nuxt-swiper',
    '@nuxt/ui',
    "nuxt-calendly",
    '@nuxtjs/seo'
  ],
  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: true
  },
  css: [
    '@/assets/css/main.css',
  ],
  turnstile: {
    siteKey: '0x4AAAAAAAPzLrwl7m19HzE-',
  },
  components: true,
  runtimeConfig: {
    turnstile: {
      secretKey: '0x4AAAAAAAPzLkJj9f6fxZehI510ELJnVMQ',
    },
    public: {
      apiBase: 'http://api.vnwa.demo/api',
      site: {
        appName: 'Vinawebapp.com',
        description: 'Thiết kế website chuyên nghiệp hàng đầu Việt Nam',
      }
    },
  },
})
