<script setup>
import SectionPageBanner from '~/components/Section/SectionPageBanner.vue';
import SectionFooterTop from '~/components/Section/SectionFooterTop.vue';
const route = useRoute();
console.log(route);
const config = useRuntimeConfig();
const { pending, data } = useFetch(`${config.public.apiBase}/get-detail-blog-${route.params.slug}`, {
 lazy: true
});
const props = defineProps({
 companyData: Object,
});
if (data.value) {
 useHead({
  title: data.value.data.name + ' ',
  meta: [
   { name: 'title', content: data.value.data.meta_title },
   { property: 'og:title', content: data.value.data.meta_title },
   { name: 'description', content: data.value.data.desc },
   { name: 'og:description', content: data.value.data.meta_desc },
   { name: 'image', content: data.value.data.meta_image },
   { name: 'ogImage', content: data.value.data.meta_image },
  ],

 });
}

</script>
<template>
 <div>
  <div v-if="pending">

   <Sorry />
  </div>
  <div v-else>
   <div v-if="data">
    <SectionPageBanner v-if="data.data" :page_name="'Bài Viết'" :title="data.data.name" :desc="data.data.desc" :url_bg="data.data.url_bg" />
    <div class="page-padding  w-full ">
     <div class="p-5 text-black bg-white border border-solid border-purple-600 relative ck-content">
      <div v-html="data.data.content"></div>
      <UDivider :avatar="{ src: '/favicon.png' }" class="mt-10" />
      <div class="mt-5 py-3 flex items-center justify-between">
       <div @click="$router.back()">
        <UTooltip text="Trở về trang trước" :popper="{ placement: 'top' }">
         <UButton color="gray">
          <Icon name="fa6-solid:arrow-left" color="white" />
         </UButton>
        </UTooltip>
       </div>
       <GroupShare />
      </div>
     </div>

    </div>
   </div>
  </div>
  <SectionFooterTop v-if="companyData" :companyData="companyData" />
  <AppFooter :companyData="companyData" />

 </div>
</template>

<style  scoped>
/*
 * CKEditor 5 (v40.2.0) content styles.
 * Generated on Tue, 09 Jan 2024 14:48:01 GMT.
 * For more information, check out https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/content-styles.html
 */
</style>