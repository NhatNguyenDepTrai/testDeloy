<script setup>
import SectionPageBanner from '~/components/Section/SectionPageBanner.vue';
import SectionFooterTop from '~/components/Section/SectionFooterTop.vue';
const route = useRoute();
const config = useRuntimeConfig();
const { pending, data } = useFetch(`${config.public.apiBase}/get-project-${route.params.slug}`, {
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
    <SectionPageBanner v-if="data.data" :page_name="'Dự án'" :title="data.data.name" :desc="data.data.desc" :url_bg="data.data.url_bg" />
    <div class="page-padding  w-full ">
     <div class="p-5 text-black bg-white border border-solid border-purple-600 relative ck-content">
      <div v-html="data.data.content"></div>
     </div>
    </div>
    <div v-if="data.data.feedback_content" class="w-full relative flex items-center justify-center">
     <div class=" p-5 rounded border-0 bg-blue-900/90 min-w-96 -translate-y-20">
      <div class="flex items-center ">
       <div class="w-full">
        <div class="testimonial-card">
         <div class="text-formatting text-large text-center text-white/80">
          <p class="text-base">“{{ data.data.feedback_content }}”</p>
         </div>
         <div class="sm:my-10 my-5 text-center">
          <img src="~assets/img/stars.svg" width="128" height="22" alt="5-star rating" class=" inline-block">
         </div>
         <div class="text-white/90 text-center uppercase text-lg">{{ data.data.feedback_name }}y</div>
        </div>

       </div>
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