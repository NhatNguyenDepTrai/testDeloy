<template>
  <div class="relative page-hover setion_feedback py-10 bg-2">
    <div class=" w-full   py-3 pt-10">
      <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Đánh giá khách hàng ?</div>
      <div class="  text-center section-text ">Đừng chỉ nghe chúng tôi nói </div>
    </div>
    <div>
      <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :pagination="true" :modules="modules" class="mySwiper">



        <swiper-slide v-for="item, index in dataFeedback.data.value">
          <div class="flex items-center ">
            <div class="w-full">
              <div class="testimonial-card">
                <div class="text-formatting text-large text-center text-white/80">
                  <p class="text-base">“{{ item.feedback_content }}”</p>
                </div>
                <div class="sm:my-10 my-5 text-center">
                  <img src="~assets/img/stars.svg" width="128" height="22" alt="5-star rating" class=" inline-block">
                </div>
                <div class="text-blue-500 text-center uppercase text-lg">{{ item.feedback_name }}y</div>
              </div>

            </div>
          </div>
        </swiper-slide>


      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    const config = useRuntimeConfig();
    const dataFeedback = useFetch(config.public.apiBase + '/' + 'get-data-feedback');
    return {
      modules: [EffectCoverflow, Pagination, SwiperAutoplay], dataFeedback
    };
  },
};
</script>
<style>
.setion_feedback .swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.setion_feedback .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 700px;
  min-height: 250px;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: rgb(255 255 255 / .1);
  background-color: rgb(21 22 47 / .5);
  padding: 15px;
}

@media (max-width: 500px) {
  .setion_feedback .swiper {
    width: 100%;
    padding-top: 10px;

  }

  .setion_feedback .swiper-slide {

    width: 100%;
    min-height: 250px;

  }
}
</style>