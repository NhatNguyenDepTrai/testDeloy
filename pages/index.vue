<script setup >
import { ref, onMounted } from 'vue';
import SectionBanner from '~/components/Section/SectionBanner.vue';
import SectionPartner from '~/components/Section/SectionPartner.vue';
import SectionTopProject from '~/components/Section/SectionTopProject.vue';
import SectionFeedback from '~/components/Section/SectionFeedback.vue';
import SectionWhyMe from '~/components/Section/SectionWhyMe.vue';
import SectionShortAbout from '~/components/Section/SectionShortAbout.vue';
import SectionFooterTop from '~/components/Section/SectionFooterTop.vue';

const props = defineProps({
 companyData: Object,
});




onMounted(async () => {

 useHead({
  title: 'Vinawebapp.com - Thiết kế website chuyên nghiệp',
  link: [{ rel: 'icon', type: 'image/png', href: props.companyData.url_favicon }],
  meta: [
   { name: 'title', content: props.companyData.meta_title },
   { name: 'ogTitle', content: props.companyData.meta_title },
   { name: 'description', content: props.companyData.meta_desc },
   { name: 'og:description', content: props.companyData.meta_desc },
   { name: 'ogImage', content: props.companyData.meta_image },
   { name: 'keywords', content: 'thiết kế web, web, 3d, công nghệ, thiết kế webiste, website, vinawebapp.com, vinawebapp' },
   { name: 'twitterCard', content: 'summary_large_image' },

  ],

 });
});

</script>

<template>
 <div>
  <Sorry v-if="!companyData" />

  <client-only v-else>
   <SectionBanner v-if="companyData" :sectionData="companyData" />
   <SectionPartner />
   <SectionTopProject />
   <SectionFeedback />
   <SectionWhyMe />
   <SectionShortAbout />
   <SectionFooterTop v-if="companyData" :companyData="companyData" />
   <AppFooter :companyData="companyData" />
  </client-only>
 </div>
</template>

<style lang="css" scoped></style>