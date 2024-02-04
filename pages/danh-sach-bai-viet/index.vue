<template>
 <div>


  <div>
   <div class="bg-page-blog  page-hover" style="min-height:1000px">
    <div class="page-padding py-5">
     <div class=" w-full   py-3 pt-10">
      <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Bài viết</div>
      <div class="  text-center section-text ">Bài Viết của chúng tôi</div>
     </div>

     <div class="grid grid-cols-12 py-3">
      <div class="sm:col-span-3 col-span-12 sticky">
       <SideBarMenu />

      </div>
      <div class="sm:col-span-9 col-span-12">
       <div v-if="dataBlogs.pending.value">

        <div class="text-center w-full">
         loading ...
        </div>
       </div>
       <div v-else>
        <div class=" w-full">

         <SectionAllBlog :data="dataBlogs.data.value" />
         <Pagination @change="refresh" :paginate="dataBlogs.data.value" :slug="route.path" />


        </div>
       </div>

      </div>
     </div>



    </div>
   </div>
   <SectionFooterTop v-if="companyData" :companyData="companyData" />
   <AppFooter :companyData="companyData" />
  </div>
 </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import SectionFooterTop from '~/components/Section/SectionFooterTop.vue';
import SectionAllBlog from '~/components/Section/SectionAllBlog.vue';


export default {
 props: {
  companyData: Object,
 },
 setup() {
  const route = useRoute();
  const config = useRuntimeConfig();
  const page = ref(1);
  const dataBlogs = ref({});
  function getdataBlogs(number) {
   dataBlogs.value = useFetch(() => `${config.public.apiBase}/get-data-all-blog?page=${number}`);
  }
  if (route.query.page) {
   page.value = route.query.page;
  }
  getdataBlogs(page.value);
  function refresh(pageNumber) {
   getdataBlogs(pageNumber);
  }
  return { getdataBlogs, refresh, dataBlogs, route };
 },

}






</script>
<style lang="">

</style>