<template>
 <div class="banner page-padding page-hover">

  <div class="grid grid-cols-12 gap-4 h-full lg:mt-0 mt-10">
   <div class="lg:col-span-6 col-span-12  lg:text-left text-center  banner-left flex items-center h-full  h-full">
    <div class="banner-left-content   " v-if="sectionData">
     <div>
      <h5 class="text-lg  text-blue-900 uppercase mb-5">{{ sectionData.short_name }}</h5>
     </div>
     <div>
      <h1 class="md:text-4xl  text-2xl font-mono font-bold md:mb-5 mb-3 text-white ">{{ sectionData.slogan }} </h1>
     </div>
     <div class="  ">
      <h3 class="md:text-xl  text-base text-gray-100/40   md:mb-5 mb-3  lg:pr-20  ">{{ sectionData.sub_slogan }} </h3>
     </div>
     <div class="flex lg:justify-start justify-center">
      <NuxtLink to="/lien-he">
       <button class=" flex md:text-xl text-base  mr-3 p-3 bg-red-500 hover:bg-red-600 uppercase">Bắt Đầu Dự Án
        <Icon name="mdi-light:arrow-right" color="white" class="ml-2  " />
       </button>
      </NuxtLink>
      <NuxtLink to="/du-an" class="button-array__button--secondary">
       <button class=" flex md:text-xl text-base   p-3 bg-gray-700 hover:bg-blue-600 uppercase">Xem dự án
        <Icon name="mdi-light:arrow-right" color="white" class="ml-2" />
       </button>
      </NuxtLink>
     </div>
     <div class="flex md:justify-start justify-center">
      <img loading="lazy" width="270" height="73" src="~/assets/img/badges.png" class=" md:my-10 my-6" alt="">
     </div>
    </div>
   </div>
   <div class="lg:col-span-6 col-span-12 banner-right h-full">
    <div class="solar-system">
     <div v-if="sectionData" id="sun">
      <img :src="sectionData.url_avatar_icon" width="100%" height="auto" alt="">
     </div>

     <div class="orbit mercury-orbit"></div>
     <div class="mercury-spin">
      <div id="mercury"></div>
     </div>

     <div class="orbit venus-orbit"></div>
     <div class="venus-spin">
      <div id="venus"></div>
     </div>

     <div class="orbit earth-orbit"></div>
     <div class="earth-spin">
      <div class="orbit moon-orbit"></div>
      <div class="moon-spin">
       <div id="moon"></div>
      </div>

      <img id="earth" src="~assets/img/earth_small_150.jpg" />
     </div>

     <div class="orbit mars-orbit"></div>
     <div class="mars-spin">
      <div id="mars"></div>
     </div>
    </div>
   </div>
  </div>

 </div>
</template>
<script>
export default {
 props: {
  sectionData: {
   type: Object,
   default: () => { },
  },
 }, methods: {
 },

}
</script>
<style scoped>
.banner {
 height: 500px;
}



@media only screen and (max-width: 1024px) {
 .banner {
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
 }
}

.banner-right {
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
}


.solar-system {
 position: relative;
 width: 390px;
 height: 390px;
 margin: auto;
 overflow: hidden;
}

/* Some positioning rules that are common for all objects */
.orbit {
 border: 1px dashed #666;
}

#sun,
.orbit,
.orbit+div,
.orbit+div>div {
 position: absolute;
}

#sun,
.orbit,
.orbit+div {
 top: 50%;
 left: 50%;
}

.orbit+div>div {
 top: 0;
 left: 50%;
}

.orbit,
.orbit+div div,
#earth {
 border-radius: 50%;
}

/* Individual objects rules. They are pretty much the same for 
all objects and basically only vary in orbit size 
and planet size. And colors :) */

#sun {
 /* Positions the top-left corner of the image to be *
	/* in the middle of the box */
 height: 100px;
 width: 100px;
 background-size: cover;
 margin-top: -50px;
 margin-left: -50px;
 border-radius: 50%;
}

#sun img {
 border-radius: 50%;
 box-shadow: 0 0 84px orange;
}

#earth {
 position: absolute;
 top: 0;
 left: 50%;
 height: 25px;
 width: 25px;
 margin-left: -12.5px;
 margin-top: -12.5px;
 border-radius: 50%;
 box-shadow: 0 0 34px #3a4385;
}

.earth-orbit,
.earth-spin {
 width: 250px;
 height: 250px;
 margin-left: -125px;
 margin-top: -125px;
}

#moon {
 margin-top: -3px;
 margin-left: -3px;
 height: 6px;
 width: 6px;
 border-radius: 50%;
 background: white;
 box-shadow: 0 0 14px #3a4385;
}

.moon-orbit,
.moon-spin {
 height: 45px;
 width: 45px;
 margin-top: -22.5px;
 margin-left: -22.5px;
 border-color: #447;
}

#venus {
 margin-top: -10px;
 margin-left: -10px;
 height: 20px;
 width: 20px;
 background-color: #3498db;
 box-shadow: 0 0 34px #3a4385;
}

.venus-orbit,
.venus-spin {
 margin-top: -92.5px;
 margin-left: -92.5px;
 width: 185px;
 height: 185px;
}

#mercury {
 margin-top: -6.75px;
 margin-left: -6.75px;
 height: 12.5px;
 width: 12.5px;
 background-color: #a65e22;
 /* box-shadow: 0 0 34px #3a4385; */
}

.mercury-orbit,
.mercury-spin {
 width: 140px;
 height: 140px;
 margin-left: -70px;
 margin-top: -70px;
}

#mars {
 margin-top: -8px;
 margin-left: -8px;
 height: 16px;
 width: 16px;
 background-color: #863222;
 box-shadow: 0 0 7px #a64232;
}

.mars-orbit,
.mars-spin {
 width: 350px;
 height: 350px;
 margin-left: -175px;
 margin-top: -175px;
}

/* Spinning animations */

@keyframes spin-right {
 100% {
  transform: rotate(360deg);
 }
}

.earth-spin {
 animation: spin-right 36.5s linear infinite;
}

.moon-spin {
 animation: spin-right 3s linear infinite;
}

.venus-spin {
 animation: spin-right 22s linear infinite;
}

.mercury-spin {
 animation: spin-right 8.8s linear infinite;
}

.mars-spin {
 animation: spin-right 68.7s linear infinite;
}
</style>