
<template>
  <client-only>
    <header class="page-padding page-hover  w-full ">
      <div class="grid grid-cols-12 gap-4 ">
        <div class=" col-span-3 ">
          <div class="logo flex items-center justify-start" v-if="companyData.data.value">
            <NuxtLink to="/" class="truncate">
              <img :src="companyData.data.value.url_avatar_full" :alt="companyData.data.value.short_name" class="hidden xl:block  h-full w-auto ">
              <img :src="companyData.data.value.url_avatar_icon" :alt="companyData.data.value.short_name" class="block  xl:hidden   h-full w-auto ">
            </NuxtLink>
          </div>
        </div>
        <div class="col-span-9">
          <div class="grid grid-cols-12 gap-4 h-full">
            <div class="col-span-10 hidden  xl:block">
              <ul class="header-menu flex items-center h-full justify-end text-white">
                <li class="">
                  <NuxtLink to="/danh-sach-du-an" class="flex">
                    <Icon name="fa6-solid:microchip" color="white" class="mr-2" /> Dự án
                  </NuxtLink>
                </li>
                <li class="">
                  <NuxtLink to="/quy-trinh" class="flex">
                    <Icon name="codicon:record-keys" color="white" class="mr-2" /> Quy trình
                  </NuxtLink>
                </li>
                <li class="">
                  <NuxtLink to="/ve-chung-toi" class="flex">
                    <Icon name="mynaui:users-group" color="white" class="mr-2" /> Về Chúng Tôi
                  </NuxtLink>
                </li>
                <li class="">
                  <NuxtLink to="/bai-viet" class="flex">
                    <Icon name="tabler:brand-blogger" color="white" class="mr-2" /> Bài Viết
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class=" col-span-9 sm:col-span-10  xl:col-span-2  flex items-center justify-end text-end">
              <nuxt-link to="/lien-he">
                <button class="custom-btn btn-order"><span>Tiếp Tục</span><span>Liên Hệ</span></button>
              </nuxt-link>
            </div>
            <!-- <div class=" col-span-4 sm:col-span-3 xl:col-span-2">
              <div class="header-lang" :class="{ active: isActiveMenuLang }">
                <div class="header-lang-main" @click="isActiveMenuLang = !isActiveMenuLang">
                  <img src="~/assets/img/icon-vi.png" alt="Vinawebapp.com Language Main">
                  <span>Vi</span>

                </div>
                <div class="header-lang-menu">
                  <ul>
                    <li class="flex" @click="isActiveMenuLang = false">
                      <img src="~/assets/img/icon-vi.png" alt="Vinawebapp.com Language select">
                      <span>Vi</span>
                    </li>
                    <li class="flex" @click="isActiveMenuLang = false">
                      <img src="~/assets/img/icon-en.png" alt="Vinawebapp.com Language select">
                      <span>EN</span>
                    </li>
                  </ul>

                </div>

              </div>
            </div> -->
            <div class="col-span-3 sm:col-span-2 block xl:hidden">
              <div class="mobile-menu">
                <button class="mobile-menu-button" :class="{ active: isActiveMobileMenu }" @click="isActiveMobileMenu = !isActiveMobileMenu">
                  <i></i>
                  <i></i>
                  <i></i>
                </button>
                <div class="mobile-menu-content bg-gray-900" :class="{ active: isActiveMobileMenu }">
                  <ul class="header-menu   h-full ">
                    <li class="">
                      <NuxtLink to="/danh-sach-du-an" class="flex" @click="isActiveMobileMenu = false"> Dự án </NuxtLink>
                    </li>
                    <li class="">
                      <NuxtLink to="/quy-trinh" class="flex" @click="isActiveMobileMenu = false"> Quá trình </NuxtLink>
                    </li>
                    <li class="">
                      <NuxtLink to="/ve-chung-toi" class="flex" @click="isActiveMobileMenu = !isActiveMobileMenu"> Về Chúng Tôi </NuxtLink>
                    </li>
                    <li class="">
                      <NuxtLink to="/bai-viet" class="flex" @click="isActiveMobileMenu = false"> Bài Viết </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  </client-only>
</template>


<script>


import { ref } from 'vue';
export default {

  data() {
    return {
      isActiveMenuLang: false,
      isActiveMobileMenu: false,
    }
  },
  setup() {
    const config = useRuntimeConfig();
    const companyData = useFetch(config.public.apiBase + '/' + 'get-data-web');
    return { companyData }
  },


};

</script>

<style scoped>
header {
  height: 100px;
  width: 100%;
  position: sticky;
  top: 0%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: rgba(15, 15, 15, 0.8);
  z-index: 999;
  box-shadow: 0 0 20px rgb(114 153 179 / 80%);

}

header .logo a {

  padding: 0 10px;
  position: relative;


}




header .logo a::before {
  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: '';
  width: 50%;
  height: 100%;
  background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
}

header .logo a:hover {
  transition: box-shadow 1.2s ease-in-out;
  box-shadow: 0 0 20px rgb(114 153 179 / 80%);

}

header .logo a:hover::before {
  -webkit-animation: shine .75s;
  animation: shine .75s;
}

@-webkit-keyframes shine {
  100% {
    left: 50%;
  }
}

@keyframes shine {
  100% {
    left: 50%;
  }
}

header .logo img {
  height: 80px;
  width: auto;

}



.header-menu li {

  padding: 10px;
}

.header-menu li a {
  box-shadow: inset 0 0 0 0 var(--blue);
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  padding: 10px;
}

.header-menu li a:hover {
  box-shadow: inset 200px 0 0 0 var(--main);
  color: white;
}

.header-menu li a.router-link-active {
  box-shadow: inset 200px 0 0 0 var(--main);
  color: white;
}

header button {
  margin: 20px;
}

header .custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  /* box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
  7px 7px 20px 0px rgba(0, 0, 0, .1),
  4px 4px 5px 0px rgba(0, 0, 0, .1); */
  outline: none;
}

header .btn-order {
  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}

header .btn-order span {
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}

header .btn-order span:nth-child(1) {

  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

header .btn-order span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}



header .btn-order:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px var(--blue),
    7px 7px 20px 0px rgba(255, 255, 255, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

header .btn-order:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px var(--blue),
    7px 7px 20px 0px rgba(255, 255, 255, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}


.header-lang {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: right;
}

.header-lang-main {
  display: flex;
  height: 40px;
  align-items: center;
  box-shadow: 0 0 20px rgb(114 153 179 / 80%);
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 12px;
}

.header-lang-main img {
  width: 30px;
  height: 30px;
}

.header-lang-main span {
  font-size: 20px;
  margin-left: 10px;
}

.header-lang-main svg {
  width: 7px;
  height: auto;
  margin-left: 10px;
}

.header-lang-menu {
  position: absolute;
  bottom: -85px;
  right: 0;
  padding: 10px;
  display: none;
}

.header-lang.active .header-lang-menu {
  display: block;
}

.header-lang.active .header-lang-main {
  box-shadow: 0 0 20px rgba(176, 21, 204, 0.8);
}

.header-lang-menu ul {
  background: #fff;
  min-width: 100px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  position: relative;
  padding: 5px;
  padding-bottom: 0px;
}

.header-lang-menu ul::before {
  content: '';
  position: absolute;
  top: -10px;
  right: 7px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 13px solid #fff;
  border-radius: 4px;
}

.header-lang-menu ul li {
  display: flex;
  text-align: right;
  width: 100%;
  padding: 5px 10px;

  color: #fff;
  align-items: center;
  justify-content: right;
  border-radius: 7px;
  background-color: #333;
  margin-bottom: 5px;
}

.header-lang-menu ul li:hover {
  background-color: var(--main);
  cursor: pointer;
  color: #fff;
}



.header-lang-menu ul li img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

@media only screen and (max-width: 1024px) and (min-width: 500px) {


  header .logo a {
    padding: 10px;
  }

  header .logo img {
    height: 60px;
  }

  header button {
    margin: 0;
  }

  header .btn-order {
    width: 100px;
    height: 40px;

    right: 0;
    bottom: 0;
    padding: 0;


    position: relative;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  header .btn-order span {
    font-size: 17pxpx;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 10px;
    height: 100%;
  }

  .mobile-menu .mobile-menu-button {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 12px;
    padding: 10px;
    position: relative;
  }

  .mobile-menu .mobile-menu-button i {
    position: absolute;
    width: 30px;
    height: 5px;
    border-radius: 10px;
    background: #333;
    right: 10px;
  }

  .mobile-menu .mobile-menu-button.active i {
    background-color: red;
  }

  .mobile-menu .mobile-menu-button i:nth-child(1) {
    top: 20%;
    transform: rotate(180deg);
    transition:
      top 0.5s ease-in-out,
      transform 0.5s ease-in-out;
  }

  .mobile-menu .mobile-menu-button.active i:nth-child(1) {
    top: 47%;
    transform: rotate(135deg);
  }

  .mobile-menu .mobile-menu-button i:nth-child(2) {
    top: 47%;
    opacity: 1;
    transition: opacity 0.5s;

  }

  .mobile-menu .mobile-menu-button.active i:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu .mobile-menu-button i:nth-child(3) {
    top: 74%;
    transform: rotate(-180deg);
    transition:
      top 0.5s ease-in-out,
      transform 0.5s ease-in-out;

  }

  .mobile-menu .mobile-menu-button.active i:nth-child(3) {
    top: 47%;
    transform: rotate(-135deg);

  }


  .mobile-menu .mobile-menu-content {
    position: fixed;
    top: 100px;
    right: -100vh;
    width: 100%;
    height: 100vh;
    z-index: 999;
    transition: right 1s;
  }

  .mobile-menu .mobile-menu-content.active {
    right: 0;

  }

  .mobile-menu .mobile-menu-content ul li a {
    text-align: right;
    justify-content: right;
    font-size: 20px;
  }

  .mobile-menu .mobile-menu-content ul.header-menu li a:hover {
    box-shadow: inset 100vh 0 0 0 var(--main);
    color: white;
  }
}

@media only screen and (max-width: 500px) {
  header {

    height: 70px;
  }

  header .logo a {
    padding: 10px;
  }

  header .logo img {
    height: 30px;
  }

  header button {
    margin: 0;
  }

  header .btn-order {
    /* width: 100%; */
    height: 25px;

    right: 0;
    bottom: 1px;
    padding: 0;


    position: relative;
    display: flex;
    align-items: center;
    justify-content: right;
    max-width: 100px;
  }

  header .btn-order span {
    font-size: 13px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header .btn-order span:nth-child(1) {
    transform: rotateX(90deg);
    transform-origin: 50% 50% -11px;
  }

  .header-lang-main {
    height: 30px;
    border-radius: 12px;
  }

  .header-lang-main img {
    width: 18px;
    height: 18px;
  }

  .header-lang-main span {
    display: none;
  }

  .header-lang-main svg {
    width: 4px;
  }

  .mobile-menu {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 10px;
    height: 100%;
  }

  .mobile-menu .mobile-menu-button {
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 6px;
    padding: 5px;
    position: relative;
  }

  .mobile-menu .mobile-menu-button i {
    position: absolute;
    width: 20px;
    height: 3px;
    border-radius: 10px;
    background: #333;
    right: 5px;
  }

  .mobile-menu .mobile-menu-button.active i {
    background-color: red;
  }

  .mobile-menu .mobile-menu-button i:nth-child(1) {
    top: 20%;
    transform: rotate(180deg);
    transition:
      top 0.5s ease-in-out,
      transform 0.5s ease-in-out;
  }

  .mobile-menu .mobile-menu-button.active i:nth-child(1) {
    top: 47%;
    transform: rotate(135deg);
  }

  .mobile-menu .mobile-menu-button i:nth-child(2) {
    top: 47%;
    opacity: 1;
    transition: opacity 0.5s;

  }

  .mobile-menu .mobile-menu-button.active i:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu .mobile-menu-button i:nth-child(3) {
    top: 74%;
    transform: rotate(-180deg);
    transition:
      top 0.5s ease-in-out,
      transform 0.5s ease-in-out;

  }

  .mobile-menu .mobile-menu-button.active i:nth-child(3) {
    top: 47%;
    transform: rotate(-135deg);

  }


  .mobile-menu .mobile-menu-content {
    position: fixed;
    top: 100px;
    right: -100vh;
    width: 100%;
    height: 100vh;
    z-index: 999;
    transition: right 1s;
  }

  .mobile-menu .mobile-menu-content.active {
    right: 0;
    top: 70px;
  }

  .mobile-menu .mobile-menu-content ul li a {
    text-align: right;
    justify-content: right;
    font-size: 20px;
  }

  .mobile-menu .mobile-menu-content ul.header-menu li a:hover {
    box-shadow: inset 100vh 0 0 0 var(--main);
    color: white;
  }
}
</style>
