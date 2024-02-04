<template>
 <div>


  <div>
   <div class="bg-page-project  page-hover" style="min-height:1000px">
    <div class="page-padding py-5">
     <div class=" w-full   py-3 pt-10">
      <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Dự án</div>
      <div class="  text-center section-text ">Một số dự án của chúng tôi</div>
      <h3 class="md:text-xl  text-base text-gray-100/60 text-center   md:mb-5 mb-3  lg:pr-20  ">Đây chỉ là một số cách chúng tôi đã giúp khách hàng chuyển đổi hoạt động kinh doanh trực tuyến. </h3>
     </div>

     <div class="grid grid-cols-12 py-3">
      <div class="sm:col-span-3 col-span-12 sticky">
       <SidebarCategoryProject />

      </div>
      <div class="sm:col-span-9 col-span-12">
       <div v-if="dataProject.pending.value">

        <div class="text-center w-full">
         loading ...
        </div>
       </div>
       <div v-else>
        <div class=" w-full">
         <ListProject :data="dataProject.data.value" />
         <Pagination @change="refresh" :paginate="dataProject.data.value" :slug="route.path" />


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
export default {
 props: {
  companyData: Object,
 },
 setup() {
  const route = useRoute();
  const config = useRuntimeConfig();

  const page = ref(1);
  const dataProject = ref({});
  function getDataProject(number) {
   dataProject.value = useFetch(() => `${config.public.apiBase}/get-all-project?page=${number}`);
  }
  if (route.query.page) {
   page.value = route.query.page;
  }



  getDataProject(page.value);
  function refresh(pageNumber) {
   getDataProject(pageNumber);
  }

  return { getDataProject, refresh, dataProject, route }
 }
}






</script>
<style lang="">

</style>