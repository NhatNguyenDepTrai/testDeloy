<script setup >


const config = useRuntimeConfig();
const dataTopProject = await useFetch(config.public.apiBase + '/' + 'get-data-top-project');
</script>



 
<template >
  <div class="page-padding  bg-1">
    <div class="grid grid-cols-12 gap-4 w-full  md:py-20 py-10">
      <div class="xl:col-span-4 col-span-12 xl:text-start  flex xl:justify-start justify-center  items-top  pt-5">
        <div>
          <h3 class="section-text ">Dự Án Nổi Bật </h3>
          <nuxt-link to="/du-an" class="">

            <h5 class="text-white/50 section-sub-text  inline-block md:mt-6 mt-3  add-transition hover:text-white ">
              Xem Thêm 55 Dự Án
              <Icon name="mdi-light:arrow-right" class="ml-2  " />
            </h5>
          </nuxt-link>
        </div>
      </div>
      <div class="xl:col-span-8 col-span-12 relative">

        <div class="grid grid-cols-12 gap-4 w-full">
          <div v-for="item, index in dataTopProject.data.value" :class="{ 'lg:col-span-12': index === 0, 'lg:col-span-6': index !== 0 }" class=" col-span-12 mb-3 ">
            <nuxt-link to="/du-an" class="block h-full  bg-card2 rounded-2xl opacity-[85%] hover:opacity-100 cursor-pointer p-4">
              <div class="grid grid-cols-12 gap-4 flex">
                <div :class="{ 'lg:col-span-6 lg:pr-20': index === 0, 'lg:col-span-12': index !== 0 }" class=" col-span-12 ">
                  <div class="lg:py-5 md:pr-3">
                    <div class="md:pb-4 pb-2 text-blue-800  uppercase md:text-base text-sm">{{ item.cate_name }}</div>

                    <h3 class="text-white  font-header font-semibold pb-4 md:text-3xl text-xl">{{ item.name }}
                      <Icon name="mdi-light:arrow-right" class="ml-2  " />
                    </h3>
                    <div class="text-formatting">
                      <p class="text-white/70  md:text-base text-sm">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
                <div :class="{ 'lg:col-span-6 lg:order-first': index === 0, 'lg:col-span-12': index !== 0 }" class=" col-span-12  flex justify-start item-center">
                  <img loading="lazy" width="100%" height="auto" src="~/assets/img/default.png" :srcset="item.url_avatar + ' 768w,' + item.url_avatar_mobile + ' 1200w,'" sizes="(min-width:768px) 365px, 100vw" class="block rounded-lg xs:mx-auto" :alt="'vinawebapp.com - ' + item.url_avatar">

                </div>

              </div>
            </nuxt-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

 
<style scoped>
.bg-card2 {
  background: linear-gradient(340.55deg, rgba(46, 92, 255, .15) -1.95%, rgba(0, 0, 0, 0) 26.83%), linear-gradient(146.92deg, rgba(46, 92, 255, .15) 5.13%, rgba(0, 0, 0, 0) 28.78%), linear-gradient(149.68deg, rgba(255, 255, 255, .1) 1.74%, rgba(255, 255, 255, 0) 93.25%);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}
</style>~/composables/fc.jsx