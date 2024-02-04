<template>
 <div class="relative overflow-hidden sectionFooterTop">
  <div class="absolute   -left-20 lg:inset-y-1/2 top-1/4  ">
   <div id="earth"></div>
  </div>
  <div v-if="companyData" class="absolute   -right-20  lg:inset-y-1/2 top-1/4 ">
   <img class="animate-bounce md:w-52 w-32" :src="companyData.url_avatar_icon" :alt="companyData.name">
  </div>
  <div class=" w-full page-padding  py-3 pt-20">
   <div class="  text-center section-text uppercase">Sẵn sàng bắt đầu hành trình của bạn? </div>
   <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Hãy cùng nhau làm nên sự bùng nổ</div>

   <div class="w-full">
    <div class="flex justify-center items-center ">
     <span class="process-auto-col"></span>
    </div>
   </div>
   <div class="mb-10 ">
    <div class="wrap">
     <NuxtLink to="lien-he">
      <button class="button">Bắt đầu dự án</button>
     </NuxtLink>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
export default {
 methods: {

 },
 props: {
  companyData: {
   type: Object,
   default: () => { },
  },
 },

}
</script>
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

@media (max-width: 500px) {
 .sectionFooterTop #earth {
  width: 8rem;
  height: 8rem;
 }

 .sectionFooterTop .wrap {
  height: 150px;
 }

 .sectionFooterTop .button {
  min-width: 250px;
  min-height: 50px;
  font-size: 17px;
 }
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