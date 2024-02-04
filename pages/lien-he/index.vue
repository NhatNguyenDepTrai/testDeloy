
<template >
  <div>
    <div class="bg-page-contact  page-hover" style="min-height:1000px">
      <div class="page-padding py-10">
        <div class=" w-full   py-3 pt-10">
          <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Liên hệ</div>
          <div class="  text-center section-text ">Bạn Đã Sẵn Sàng Cho Một Trang Web Mới Xuất Sắc ?</div>
          <h3 class="md:text-xl  text-base text-gray-100/40 text-center   md:mb-5 mb-3  lg:pr-20  ">Đội ngũ của Vinawebapp.com luôn trong trạng thái sẵn sàng để bắt đầu! </h3>

        </div>
        <div class="my-5 w-full flex items-center justify-center">
          <div class="bg-card w-3xl md:w-4/6 w-full p-10   relative">
            <Loading v-if="isLoading" />
            <form v-if="isContact" @submit.prevent="submitContact">
              <div class="grid grid-cols-12 gap-4">
                <div class="md:col-span-6 col-span-12">
                  <div class="mb-3">
                    <label for="name" class="text-lg text-white/80 mb-2">Tên </label>
                    <input v-model="form.name" type="text" id="name" @keyup="error.name = ''" :class="{ 'border-red-500/80': error.name }" class=" text-xl focus:outline-none   border  border-2 border-white/10  focus:border-white/50 py-4 px-3  rounded  text-white/90 block w-full transition ease-out duration-200 appearance-none   bg-black " autofocus>
                  </div>
                  <div class="text-red-400/80 ps-2 mt-2 mb-4">
                    {{ error.name }}
                  </div>

                </div>
                <div class="md:col-span-6 col-span-12">
                  <div class="mb-3">
                    <label for="phone" class="text-lg text-white/80 mb-2">Số Điện Thoại</label>
                    <input v-model="form.phone" type="text" id="phone" @keyup="error.phone = ''" :class="{ 'border-red-500/80': error.phone }" class=" text-xl focus:outline-none   border  border-2 border-white/10  focus:border-white/50 py-4 px-3  rounded  text-white/90 block w-full transition ease-out duration-200 appearance-none   bg-black ">
                  </div>

                  <div class="text-red-400/80 ps-2 mt-2 mb-4">
                    {{ error.phone }}
                  </div>

                </div>
                <div class="md:col-span-6 col-span-12">
                  <div class="mb-3">
                    <label for="email" class="text-lg text-white/80 mb-2">Email</label>
                    <input v-model="form.email" type="text" id="email" @keyup="error.email = ''" :class="{ 'border-red-500/80': error.email }" class=" text-xl focus:outline-none   border  border-2 border-white/10  focus:border-white/50 py-4 px-3  rounded  text-white/90 block w-full transition ease-out duration-200 appearance-none   bg-black ">
                    <div class="text-red-400/80 ps-2 mt-2 mb-4">
                      {{ error.email }}

                    </div>

                  </div>
                </div>
                <div class="md:col-span-6 col-span-12">
                  <div class="mb-3">
                    <label for="budget" class="text-lg text-white/80 mb-2">Ngân Sách</label>
                    <select v-model="form.budget" id="budget" @change="error.budget = ''" :class="{ 'border-red-500/80': error.budget }" class=" cursor-pointer text-xl focus:outline-none   border  border-2 border-white/10  focus:border-white/50 py-4 px-3  rounded  text-white/90 block w-full transition ease-out duration-200 appearance-none   bg-black ">
                      <option value=""></option>
                      <option value="6 triệu - 10 triệu" class="cursor-pointer hover:bg-purple-900">Dưới 10 triệu</option>
                      <option value="10 triệu - 20 triệu" class="cursor-pointer hover:bg-purple-900">10 triệu - 20 triệu</option>
                      <option value="6 triệu - 10 triệu" class="cursor-pointer hover:bg-purple-900">20 triệu - 30 triệu</option>
                      <option value="6 triệu - 10 triệu" class="cursor-pointer hover:bg-purple-900">30 triệu - 40 triệu</option>
                      <option value="6 triệu - 10 triệu" class="cursor-pointer hover:bg-purple-900">40 triệu - 50 triệu</option>
                      <option value="6 triệu - 10 triệu" class="cursor-pointer hover:bg-purple-900">50 triệu - 100 triệu</option>
                      <option value="6 triệu - 10 triệu" class="cursor-pointer hover:bg-purple-900">Trên 100 Triệu</option>
                    </select>
                    <div class="text-red-400/80 ps-2 mt-2 mb-4">
                      {{ error.budget }}

                    </div>
                  </div>
                </div>

                <div class="col-span-12">
                  <div class="mb-3">
                    <label for="note" class="text-lg text-white/80 mb-3">Lời nhắn</label>

                    <textarea v-model="form.note" id="note" @keyup="error.note = ''" :class="{ 'border-red-500/80': error.note }" cols="30" rows="3" class="  text-xl focus:outline-none   border  border-2 border-white/10  focus:border-white/50 py-4 px-3  rounded  text-white/90 block w-full transition ease-out duration-200 appearance-none   bg-black "></textarea>
                    <div class="text-red-400/80 ps-2 mt-2 mb-4">
                      {{ error.note }}

                    </div>
                  </div>

                </div>


              </div>
              <div class="col-span-12">
                <div class="text-center w-full p-5 flex items-center justify-center ">
                  <NuxtTurnstile v-model="form.token" />
                </div>
              </div>
              <div class="col-span-12">
                <div class="text-center p-5 flex items-center justify-center">

                  <button type="submit" class=" flex md:text-xl text-base  mr-3 p-3 bg-red-500 hover:bg-red-600 uppercase">Gửi Tin Nhắn
                    <Icon name="humbleicons:navigation" color="white" class="ml-2  " />
                  </button>

                </div>
              </div>
            </form>
            <div v-else class="text-center text-2xl text-white font-bold py-5">
              Liên hệ của bạn đã được gửi. Xin cảm ơn!
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter :companyData="companyData" />
  </div>
</template>
<script setup >
import { ref, onMounted } from 'vue';
import Loading from '~/components/Loading.vue';

const props = defineProps({
  companyData: Object,
});
useHead({
  title: 'Liên hệ',
  meta: [
    { name: 'title', content: ' Liên hệ  với Vinawebapp.com' },
    { name: 'description', content: 'Cuối cùng bạn đã đến. Sẵn sàng cho một trang web mới đẹp và hiệu quả? Chúng tôi,nhóm thiết kế web chuyên nghiệp của bạn, đang chờ bạn yêu cầu.' },
  ],

});

// code form submit
const config = useRuntimeConfig();
const toast = useToast()
const isLoading = ref(false);
const isContact = ref(true);
const form = reactive({
  name: '',
  phone: '',
  email: '',
  budget: '',
  note: '',
  token: '',

});



const error = ref({
  name: '',
  phone: '',
  email: '',
  budget: '',
  note: '',
});


const checkForm = () => {
  if (form.name.trim() === '') {
    error.value.name = 'Vui lòng nhập tên!'
    return false;
  }
  if (form.phone.trim() === '') {
    error.value.phone = 'Vui lòng nhập số điện thoại!'
    return false;
  }
  if (form.email.trim() === '') {
    error.value.email = 'Vui lòng nhập email!'
    return false;
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (form.email && !regex.test(form.email)) {
    error.value.email = 'Vui lòng nhập đúng định dạng email!'
    isLoading.value = false;
    return false;
  }


  if (form.budget.trim() === '') {
    error.value.budget = 'Vui lòng chọn ngân sách!'
    return false;
  }

  return true;
}
const clearError = () => {
  error.value.name = '';
  error.value.phone = '';
  error.value.email = '';
  error.value.budget = '';
  error.value.note = '';

}
const submitContact = async () => {
  clearError;
  const isForm = checkForm();
  if (!isForm) {
    toast.add({
      avatar: { src: 'favicon.png' },
      title: 'Vinawebapp.com',
      description: 'Vui lòng nhập đầy đủ thông tin!',
      ui: {
        "progress": {
          "base": 'absolute bottom-0 end-0 start-0 h-1',
          "background": 'bg-red-500 dark:bg-red-500',
        }
      },
    });
    return;
  }
  isLoading.value = true;



  try {
    const response = await useFetch(config.public.apiBase + '/submit-contact', {
      method: 'POST',
      body: form,
    });

    // Kiểm tra mã trạng thái phản hồi
    if (response.status.value == 'error') {


      setTimeout(() => {

        const responseError = response.error.value.data.errors;
        if (responseError) {

          Object.keys(responseError).forEach((key) => {
            if (key in error.value) {
              error.value[key] = responseError[key][0];
            }
          });
        }
        isLoading.value = false;
        toast.add({
          avatar: { src: 'favicon.png' },
          title: 'Vinawebapp.com',
          description: 'Gửi liên hệ không thành công, vui lòng kiểm tra lại!',
          ui: {
            "progress": {
              "base": 'absolute bottom-0 end-0 start-0 h-1',
              "background": 'bg-red-500 dark:bg-red-500',
            }
          },
        });

      }, 1000);
    } else {
      setTimeout(() => {
        isLoading.value = false;
        isContact.value = false;

        toast.add({
          avatar: { src: 'favicon.png' },
          title: 'Vinawebapp.com',
          description: 'Gửi liên hệ thành công!',
        });

      }, 1000);

    }
  } catch (error) {


    console.error('Request Error:', response.error);


    setTimeout(() => {
      isLoading.value = false;
      toast.add({
        avatar: { src: 'favicon.png' },
        title: 'Vinawebapp.com',
        description: 'Vui lòng nhập đầy đủ thông tin',
        ui: {
          "progress": {
            "base": 'absolute bottom-0 end-0 start-0 h-1',
            "background": 'bg-red-500 dark:bg-red-500',
          }
        },
      });

    }, 1000);

  }


};

</script>
<style lang="">
 
</style>