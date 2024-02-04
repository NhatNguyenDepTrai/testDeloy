<template>
 <div>
  <div v-if="props.data && props.data.data" v-for="item, index in props.data.data" :key="index" class="mb-5 bg-card">
   <NuxtLink :to="'/du-an/' + item.slug">
    <div class=" block h-full bg-card2 rounded-2xl opacity-[85%] hover:opacity-100 cursor-pointer p-4">
     <div class="grid grid-cols-12 gap-4 ">
      <div class=" col-span-12  flex justify-start item-center">
       <img loading="lazy" width="100%" height="auto" src="~/assets/img/default.png" :srcset="item.url_avatar + ' 768w,' + item.url_avatar_mobile + ' 1200w,'" sizes="(min-width:768px) 365px, 100vw" class="block rounded-lg xs:mx-auto" :alt="'vinawebapp.com - ' + item.url_avatar">
      </div>
      <div class=" col-span-12 ">
       <div class="lg:py-5 md:pr-3">
        <div class="md:pb-4 pb-2 text-blue-800  uppercase md:text-base text-sm">{{ item.category_project.name }}</div>

        <h3 class="text-white  font-header font-semibold pb-4 md:text-3xl text-xl">{{ item.name }}
         <Icon name="mdi-light:arrow-right" class="ml-2  " />
        </h3>
        <div class="text-formatting">
         <p class="text-white/70  md:text-base text-sm">{{ item.desc }}</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </NuxtLink>
  </div>
 </div>
</template>

<script  setup>
const props = defineProps({
 data: Object,
});
const route = useRoute();

</script>

<style></style>