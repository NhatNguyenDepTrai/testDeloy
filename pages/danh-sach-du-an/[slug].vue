<template>
 <div>

  <client-only>


   <div>
    <div class="bg-page-project  page-hover" style="min-height:1000px">

     <div class="page-padding py-5">
      <div class=" w-full   py-3 pt-10" v-if="dataReturn.pending.value">
       <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Dự án</div>
       <div class="  text-center section-text ">Một số dự án của chúng tôi</div>
       <h5 class="md:text-xl  text-base text-gray-100/60 text-center   md:mb-5 mb-3  lg:pr-20  ">
        Đây chỉ là một số cách chúng tôi đã giúp khách hàng chuyển đổi hoạt động kinh doanh trực tuyến.
       </h5>
      </div>
      <div class=" w-full   py-3 pt-10" v-else-if="pageData">
       <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Dự án</div>
       <div class="  text-center section-text ">{{ pageData.name }}</div>
       <h5 class="md:text-xl  text-base text-gray-100/60 text-center   md:mb-5 mb-3  lg:pr-20  ">{{ pageData.desc }} </h5>
      </div>
      <div class="grid grid-cols-12 py-3">
       <div class="sm:col-span-3 col-span-12">
        <SidebarCategoryProject />
       </div>
       <div class="sm:col-span-9 col-span-12">
        <div v-if="dataReturn.pending.value">

         <div class="text-center w-full">
          loading ...
         </div>
        </div>
        <div v-else>
         <div class=" w-full" v-if="dataReturn.data.value.dataProject">
          <ListProject :data="dataReturn.data.value.dataProject" />
          <!-- {{ dataProject }} -->
          <Pagination @change="refresh" :paginate="dataReturn.data.value.dataProject" :slug="route.path" />


         </div>
        </div>

       </div>
      </div>



     </div>
    </div>
    <SectionFooterTop v-if="companyData" :companyData="companyData" />
    <AppFooter :companyData="companyData" />
   </div>
  </client-only>
 </div>
</template>
<script  >
import { ref, onMounted } from 'vue';
import SectionFooterTop from '~/components/Section/SectionFooterTop.vue';
export default {
 props: {
  companyData: Object,
 },
 setup() {
  const route = useRoute();
  const config = useRuntimeConfig();

  const page = ref(1);
  const dataProject = ref({});
  const pageData = ref({});
  const dataReturn = ref({});
  function getDataProject(number) {
   dataReturn.value = useFetch(() => `${config.public.apiBase}/get-project-in-cate-${route.params.slug}?page=${number}`);
   if (dataReturn.value.data.value) {
    dataProject.value = dataReturn.value.data.value.dataProject;
    pageData.value = dataReturn.value.data.value.page;


    useHead({
     title: 'Dự án - ' + pageData.value.name + ' ',
     meta: [
      { name: 'title', content: pageData.value.meta_title },
      { property: 'og:title', content: pageData.value.meta_title },
      { name: 'description', content: pageData.value.desc },
      { name: 'og:description', content: pageData.value.meta_desc },
      { name: 'image', content: pageData.value.meta_image },
      { name: 'ogImage', content: pageData.value.meta_image },
     ],

    });
   }


  }
  if (route.query.page) {
   page.value = route.query.page;
  }

  getDataProject(page.value);
  function refresh(pageNumber) {
   getDataProject(pageNumber);
  }



  return { getDataProject, refresh, dataProject, route, dataReturn, pageData }
 }
}






</script>
<style lang="">

</style>