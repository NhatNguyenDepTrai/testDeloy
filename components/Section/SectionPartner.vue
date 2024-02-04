<script setup  >



const config = useRuntimeConfig();
const dataPartner = await useFetch(config.public.apiBase + '/' + 'get-data-brands');

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
const onSwiper = (swiper) => {
   // console.log(swiper);
};
const onSlideChange = () => {
   // console.log('slide change');
};
// Import Swiper styles
import 'swiper/css';


</script>



 
<template >
   <div class="page-padding page-hover">
      <div class="divider"></div>
      <div class="grid grid-cols-12 gap-4 w-full  py-5">
         <div class="lg:col-span-2 col-span-12 lg:text-start  flex lg:justify-start justify-center  items-center uppercase font-bold">
            <h3 class="text-white/80 uppercase font-semibold tracking-widest  sm:pb-3 sal-animate">Được tin tưởng bởi </h3>
         </div>
         <div class="lg:col-span-10 col-span-12 relative">
            <Swiper :modules="[SwiperAutoplay]" :slides-per-view="6" :space-between="30" @swiper="onSwiper" @slideChange="onSlideChange" :breakpoints="{
               '@0.00': {
                  slidesPerView: 3,
                  spaceBetween: 10,
               },
               '@0.75': {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
               '@1.00': {
                  slidesPerView: 4,
                  spaceBetween: 30,
               },
               '@1.50': {
                  slidesPerView: 6,
                  spaceBetween: 30,
               },
            }" :autoplay="{ delay: 2500, disableOnInteraction: false, }">


               <swiper-slide v-for="item, index in dataPartner.data.value">
                  <nuxt-link :to="item.link" class=" w-full flex justify-center  items-center filter grayscale hover:grayscale-0 cursor-pointer">
                     <img :src="item.url_avatar" :key="index" class="h-20 w-auto  " :alt="'Vinawebapp.com - ' + item.name">
                  </nuxt-link>
               </swiper-slide>

            </Swiper>

         </div>
      </div>
      <div class="divider"></div>
   </div>
</template>

 
<style scoped></style>