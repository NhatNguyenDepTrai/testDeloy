<template>
 <div>

  <client-only>


   <div>
    <div class="bg-page-blog  page-hover" style="min-height:1000px">

     <div class="page-padding py-5">
      <div class=" w-full   py-3 pt-10" v-if="dataReturn.pending.value">
       <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Bài Viết</div>
       <div class="  text-center section-text ">Danh Sách Những Bài Viết Bổ Ích Của Chúng Tôi</div>

      </div>
      <div class=" w-full   py-3 pt-10" v-else-if="pageData">
       <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Bài Viết</div>
       <div class="  text-center section-text ">{{ pageData.name }}</div>
       <h5 class="md:text-xl  text-base text-gray-100/60 text-center   md:mb-5 mb-3  lg:pr-20  ">{{ pageData.desc }} </h5>
      </div>
      <div class="grid grid-cols-12 py-3">
       <div class="sm:col-span-3 col-span-12">
        <SideBarMenu />
       </div>
       <div class="sm:col-span-9 col-span-12">
        <div v-if="dataReturn.pending.value">

         <div class="text-center w-full">
          loading ...
         </div>
        </div>
        <div v-else>
         <div class=" w-full" v-if="dataReturn.data.value.dataBlog">
          <SectionAllBlog :data="dataReturn.data.value.dataBlog" />
          <!-- {{ dataBlog }} -->
          <Pagination @change="refresh" :paginate="dataReturn.data.value.dataBlog" :slug="route.path" />


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
  const dataBlog = ref({});
  const pageData = ref({});
  const dataReturn = ref({});
  function getdataBlog(number) {
   dataReturn.value = useFetch(() => `${config.public.apiBase}/get-blog-in-cate-${route.params.slug}?page=${number}`);
   if (dataReturn.value.data.value) {
    dataBlog.value = dataReturn.value.data.value.dataBlog;
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

  getdataBlog(page.value);
  function refresh(pageNumber) {
   getdataBlog(pageNumber);
  }



  return { getdataBlog, refresh, dataBlog, route, dataReturn, pageData }
 }
}






</script>
<style lang="">

</style>