<template>
 <div>
  <div v-if="props.data && props.data.data" class="grid grid-cols-12 py-3 gap-4 list_blog">
   <div v-for="item, index in props.data.data" :key="index" class="lg:col-span-4 sm:col-span-6 col-span-12">
    <div class="mb-5 bg-card blog_item">
     <NuxtLink :to="'/bai-viet/' + item.slug">
      <div class=" block h-full  rounded-2xl opacity-[85%] hover:opacity-100 cursor-pointer p-4">
       <div class="grid grid-cols-12 gap-4 ">
        <div class=" col-span-12  blog_item_avatar">
         <img loading="lazy" width="100%" height="auto" src="~/assets/img/default.png" :srcset="item.url_avatar + ' 768w,' + item.url_avatar_mobile + ' 1200w,'" sizes="(min-width:768px) 365px, 100vw" class="" :alt="'vinawebapp.com - ' + item.url_avatar">
        </div>
        <div class=" col-span-12 ">
         <div class="lg:pb-5 md:pr-3">
          <div class=" pb-1 text-blue-800  uppercase md:text-sm text-sm">{{ item.category_blog.name }}</div>

          <h3 class="text-white  font-header font-semibold md:text-2xl text-xl blog_item_name">{{ item.name }}
          </h3>
          <div class="text-formatting">
           <p class="text-white/70  text-sm blog_item_desc">{{ item.desc }}</p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </NuxtLink>
    </div>
   </div>
  </div>

 </div>
</template>

<script  setup>
const props = defineProps({
 data: Object,
});
const route = useRoute();

</script>

<style scoped>
.blog_item {
 width: 100%;
 height: 400px;
}

.blog_item .blog_item_avatar {
 position: relative;
 width: 100%;
 height: 200px;
 text-align: center;
 display: flex;
 align-items: center;
 justify-content: center;
 overflow: hidden;
 background-color: #fff;
 border-radius: 3px;
}

.blog_item .blog_item_avatar img {
 width: auto;
 height: 100%;
 display: block;
}

.blog_item .blog_item_name {
 max-height: 65px;
 overflow: hidden;
 display: -webkit-box;
 -webkit-box-orient: vertical;
 -webkit-line-clamp: 2;
}

.blog_item .blog_item_desc {
 max-height: 65px;
 overflow: hidden;
 display: -webkit-box;
 -webkit-box-orient: vertical;
 -webkit-line-clamp: 3;
}
</style>