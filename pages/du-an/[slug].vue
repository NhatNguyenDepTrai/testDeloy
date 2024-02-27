<script setup>
const props = defineProps({
 companyData: Object,
});
const route = useRoute();
const config = useRuntimeConfig();
const { pending, data } = useFetch(`${config.public.apiBase}/get-project-${route.params.slug}`, {
 lazy: true
});
</script>
<template>
 <div>
  <div v-if="pending">

   <Sorry />
  </div>
  <div v-else>
   <Title>{{ data.data.name }}</Title>
   <Meta name="title" :content="data.data.meta_title" />
   <Meta name="og:title" :content="data.data.meta_title" />
   <Meta name="og:description" :content="data.data.meta_desc" />
   <Meta name="description" :content="data.data.meta_desc" />

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

<style  scoped></style>