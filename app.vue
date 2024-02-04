

<script setup>
import { ref, onMounted } from 'vue';
import Sorry from '~/components/Sorry.vue';

const config = useRuntimeConfig();
const { pending, data } = useFetch(config.public.apiBase + '/' + 'get-data-web', {
  lazy: true
});



</script>

<template>
  <div>
    <Sorry v-if="pending" />
    <NuxtLayout v-else>
      <AppHeader :companyData="data" />
      <NuxtPage :companyData="data" />
      <BookACall />
      <ScrollToTop />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>

<style>
body {
  color: #fff;
  background-color: black;
}


.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
