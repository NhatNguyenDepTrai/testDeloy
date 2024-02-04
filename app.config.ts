// app.config.ts
export default defineAppConfig({
 nuxtIcon: {
  size: '25px', // default <Icon> size applied
  class: 'icon', // default <Icon> class applied
  aliases: {
   'nuxt': 'logos:nuxt-icon',
  }
 },
 ui: {
  notifications: {
   // Show toasts at the top right of the screen
   position: 'top-20 bottom-auto',
   avatar: { src: 'favicon.png' },

  },

 },

})
