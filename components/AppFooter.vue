<script setup>
import { ref, onMounted } from 'vue';

const formattedPhoneNumber = (phoneNumber) => {
 const cleanedNumber = phoneNumber.replace(/\D/g, "");
 const part1 = cleanedNumber.slice(0, 3);
 const part2 = cleanedNumber.slice(3, 7);
 const part3 = cleanedNumber.slice(7, 10);
 return `${part1} ${part2} ${part3}`;
};

const props = defineProps({
 companyData: Object,
});


const config = useRuntimeConfig();

const { data, pending } = useFetch(config.public.apiBase + '/' + 'get-list-category-blog-highlight', {
 lazy: true
});
</script>

<template>
 <client-only>

  <footer class="relative " style="overflow: hidden;" v-if="props.companyData">

   <div class="w-full page-padding py-3 md:pt-20">

    <div class="py-5 grid grid-cols-12 gap-4">
     <div class="lg:col-span-4 col-span-12 lg:order-1 order-2">
      <div class="flex items-center lg:justify-start justify-center hover:text-purple-500 cursor-pointer">
       <icon name="fa6-solid:phone" class="w-5 mr-4" />
       <span class="text-lg font-bold">{{ formattedPhoneNumber(props.companyData.phone) }}</span>
      </div>
     </div>
     <div class="lg:col-span-4 col-span-12 lg:order-2 order-1">
      <div class="flex items-center justify-center">
       <img :src="props.companyData.url_avatar_full" :alt="props.companyData.name" width="200" loading="lazy">
      </div>
     </div>
     <div class="lg:col-span-4 col-span-12 lg:order-13 order-3">
      <div class="flex items-center lg:justify-end justify-center flex-wrap">
       <a v-if="props.companyData.facebook" :href="props.companyData.facebook" target="_blank" rel="noopener noreferrer" class="p-2 lg:m-1">
        <div class="rounded-lg w-10 h-10 bg-white hover:bg-white/70 border-white border-solid border-2 flex justify-center items-center">
         <icon name="logos:facebook" />
        </div>
       </a>
       <a v-if="props.companyData.youtube" :href="props.companyData.youtube" target="_blank" rel="noopener noreferrer" class="p-2 lg:m-1">
        <div class="rounded-lg w-10 h-10 bg-white hover:bg-white/70 border-white border-solid border-2 flex justify-center items-center">
         <icon name="logos:youtube-icon" />
        </div>
       </a>
       <a v-if="props.companyData.tiktok" :href="props.companyData.tiktok" target="_blank" rel="noopener noreferrer" class="p-2 lg:m-1">
        <div class="rounded-lg w-10 h-10 bg-white hover:bg-white/70 border-white border-solid border-2 flex justify-center items-center">
         <icon name="logos:tiktok-icon" />
        </div>
       </a>
       <a v-if="props.companyData.linkedin" :href="props.companyData.linkedin" target="_blank" rel="noopener noreferrer" class="p-2 lg:m-1">
        <div class="rounded-lg w-10 h-10 bg-white hover:bg-white/70 border-white border-solid border-2 flex justify-center items-center">
         <icon name="logos:linkedin-icon" />
        </div>
       </a>
       <a v-if="props.companyData.instagram" :href="props.companyData.instagram" target="_blank" rel="noopener noreferrer" class="p-2 lg:m-1">
        <div class="rounded-lg w-10 h-10 bg-white hover:bg-white/70 border-white border-solid border-2 flex justify-center items-center">
         <icon name="logos:instagram-icon" />
        </div>
       </a>
       <a v-if="props.companyData.telegram" :href="props.companyData.telegram" target="_blank" rel="noopener noreferrer" class="p-2 lg:m-1">
        <div class="rounded-lg w-10 h-10 bg-white hover:bg-white/70 border-white border-solid border-2 flex justify-center items-center">
         <icon name="logos:telegram" />
        </div>
       </a>
      </div>
     </div>



    </div>
    <div class="w-full h-px bg-purple-200"></div>

    <div class="w-full grid grid-cols-12 gap-4 py-10">
     <ul v-if="!pending" class="lg:col-span-9 col-span-12 flex lg:justify-start justify-center items-center flex-wrap">


      <li class="p-3" v-for="item in data"><nuxt-link :to="'/danh-sach-bai-viet/' + item.slug" class="text-base text-white/50 hover:text-white">{{ item.name }}</nuxt-link></li>

     </ul>
     <div class="lg:col-span-3 col-span-12 flex lg:justify-end justify-center items-center flex-wrap">
      <span class="p-3 text-white/50"> © Vinawebapp.com Inc.</span>
     </div>
    </div>
   </div>
  </footer>
 </client-only>
</template>

<style scoped>
.sectionFooterTop .process-auto-col {
 width: 2px;
 height: 110px;
 background-color: #343131;

 position: relative;
 overflow: hidden;
 border-radius: 50%;
}

.sectionFooterTop .process-auto-col::before {
 content: "";
 width: 2px;
 height: 110px;
 position: absolute;
 background: var(--main);

 right: 0;
 animation: process_auto_col_animation 2s linear 0s infinite normal forwards;
}

@keyframes process_auto_col_animation {
 0% {
  top: -100%;
 }

 100% {
  top: 100%
 }
}



.sectionFooterTop .wrap {
 height: 300px;
 display: flex;
 align-items: center;
 justify-content: center;
}

.sectionFooterTop .button {
 min-width: 300px;
 min-height: 60px;
 font-family: 'Nunito', sans-serif;
 font-size: 22px;
 text-transform: uppercase;
 letter-spacing: 1.3px;
 font-weight: 700;
 color: #313133;
 background: var(--blue);
 background: linear-gradient(90deg, var(--blue) 0%, var(--main) 100%);
 border: none;
 border-radius: 1000px;
 box-shadow: 12px 12px 24px rgba(79, 209, 197, .64);
 transition: all 0.3s ease-in-out 0s;
 cursor: pointer;
 outline: none;
 position: relative;

}

.sectionFooterTop button::before {
 content: '';
 border-radius: 1000px;
 min-width: calc(300px + 12px);
 min-height: calc(60px + 12px);
 border: 6px solid #ce42d5;
 box-shadow: 0 0 60px rgba(174, 57, 209, 0.64);
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 opacity: 0;
 transition: all .3s ease-in-out 0s;
}

.sectionFooterTop .button:hover,
.button:focus {
 color: #cbc5c5;
 transform: translateY(-6px);
}

footer button:hover::before,
button:focus::before {
 opacity: 1;
}

.sectionFooterTop button::after {
 content: '';
 width: 30px;
 height: 30px;
 border-radius: 100%;
 border: 6px solid var(--main);
 position: absolute;
 z-index: -1;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 animation: ring 1.5s infinite;
}

.sectionFooterTop button:hover::after,
button:focus::after {
 animation: none;
 display: none;
}

@keyframes ring {
 0% {
  width: 30px;
  height: 30px;
  opacity: 1;
 }

 100% {
  width: 300px;
  height: 300px;
  opacity: 0;
 }
}


.sectionFooterTop #earth {
 background: url(https://cdn.rawgit.com/ManzDev/cursos-assets/gh-pages/css3/earth-2.jpg);
 background-size: cover;
 border: 2px solid #000;
 border-radius: 50%;
 width: 200px;
 height: 200px;
 animation: movimiento 5s linear 0s infinite;
 box-shadow: 0 0 25px RGBA(255, 255, 255, 0.10),
  -8px -8px 15px #000 inset,
  2px 2px 25px #000 inset,
  -45px -45px 25px RGBA(0, 0, 0, 0.5) inset,
  25px 25px 45px RGBA(0, 0, 0, 0.45) inset;
 transform: rotateX(6deg) rotateY(6deg) rotateZ(6deg);
}

@keyframes movimiento {
 0% {
  background-position: 0 0
 }

 100% {
  background-position: 355px 0
 }
}

@keyframes stars {
 0% {
  background-position: 0 0
 }

 100% {
  background-position: 0 100%
 }
}
</style>