<script setup>
const config = useRuntimeConfig();

const { data } = useFetch(config.public.apiBase + '/' + 'get-data-category-project');

const isMenuCategoryProject = ref(false);

</script>
<template >
 <div>
  <div id="sidebarCategoryProject   pe-7">
   <div class="text-white text-2xl mb-3 sm:text-start text-center md:block hidden">
    Các ngành nghề
   </div>
   <div class="relative">
    <div :class="{ 'shadow ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900': isMenuCategoryProject }" class="mb-3  bg-black/80  text-2xl px-5 py-2  text-white/80   border-solid border-2 border-black  rounded border-fuchsia-800  flex items-center justify-between sm:hidden" @click="isMenuCategoryProject = !isMenuCategoryProject">
     Các Ngành Nghề
     <Icon name="fa6-solid:chevron-down" :class="{ 'text-purple-600': isMenuCategoryProject }" />
    </div>
    <ul class="category-project-list shadow-inner rounded-xl shadow-indigo-500/40" :class="{ 'active': isMenuCategoryProject }">
     <li class="mb-2">
      <NuxtLink to="/danh-sach-du-an">
       <div class="text-xl rounded-xl text-white/70 hover:text-white border-white border-solid border-1">Tất Cả</div>
      </NuxtLink>
     </li>
     <li class="mb-2" v-if="data" v-for="item in data">
      <NuxtLink :to="'/danh-sach-du-an/' + item.slug">
       <div class="text-xl rounded-xl text-white/70 hover:text-white border-white border-solid border-1">{{ item.name }}</div>
      </NuxtLink>
     </li>
    </ul>
   </div>

  </div>
 </div>
</template>

<style lang="css" scoped>
@media screen and (max-width: 480px) {
 .category-project-list {
  overflow-y: hidden;
  height: 0;
  transition: 0.5s all;
  margin-bottom: 30px;
 }

 .category-project-list.active {
  overflow-y: scroll;
  height: 200px;
  transition: 0.5s all;
 }


}

.category-project-list li a>div {
 width: 100%;
 padding: 10px;
 font-size: 20px;
 border: 1px;

}



.category-project-list li a.router-link-active>div {
 background: linear-gradient(340.55deg, rgba(46, 92, 255, .15) -1.95%, rgba(0, 0, 0, 0) 26.83%), linear-gradient(146.92deg, rgba(174, 100, 224, 0.15) 5.13%, rgba(0, 0, 0, 0) 28.78%), linear-gradient(149.68deg, rgba(255, 255, 255, .1) 1.74%, rgba(255, 255, 255, 0) 93.25%);
 -webkit-backdrop-filter: blur(12px);
 backdrop-filter: blur(12px);
 opacity: 1;
 transform: none;
 border: var(--main) solid 1px;
 transition: 1s;
}
</style>