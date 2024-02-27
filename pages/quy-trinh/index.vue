<script  setup>
import { ref, onMounted } from 'vue';

useHead({
  title: 'Quy trình ',
  meta: [
    { name: 'title', content: 'Quy trình thiết kế website ở Vinawebapp.com' },
    { property: 'og:title', content: 'Quy trình thiết kế website ở Vinawebapp.com' },
  ],
});

const props = defineProps({
  companyData: Object,
});


</script>
<template>
  <div>
    <div class="process">
      <img loading="lazy" src="/process_bg.jpg" class="w-full h-auto opacity-25 absolute -top-20 -z-10" alt="Vinawebapp.com">
      <div class=" w-full   py-3 pt-10">
        <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Quy trình</div>
        <div class="  text-center section-text ">Quá trình phát triển dự án của chúng tôi</div>
        <h3 class="md:text-xl  text-base text-gray-100/60 text-center   md:mb-5 mb-3  lg:pr-20  ">Dự án tuyệt vời không cần phải phức tạp. </h3>
      </div>

      <div class="relative page-padding page-hover  py-10  ">
        <div class=" w-full   py-3 pt-10">
          <div class="  text-center section-text ">Điều gì tạo nên một dự án thiết kế website hoàn hảo </div>
        </div>
        <div class="grid grid-cols-12 gap-4 py-20">
          <div class="lg:col-span-4 sm:col-span-6 col-span-12">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="emojione:computer-mouse" />
                    <div class="animate-glow absolute bg-slate-500 top-2 w-16 h-12  "> </div>
                  </div>

                </div>
                <div class="name">Vấn đề chuyên môn</div>
                <div class="desc">Chúng tôi sỡ hữu đội ngũ có hơn 10+ năm kinh nghiệm và chúng tôi hiểu rõ về lĩnh vực này. Bạn có thể dựa vào chuyên môn của chúng tôi và yên tâm vì bạn sẽ có một trang web tuyệt vời. </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4 sm:col-span-6 col-span-12 lg:-translate-y-16">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="emojione:calendar" />
                    <div class="animate-glow absolute bg-red-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">Một lịch trình rõ ràng</div>
                <div class="desc">Chúng tôi có một lịch trình dự án được làm rõ một cách tinh tế giúp duy trì sự chuẩn bị. Bất cứ lúc nào, bạn sẽ biết chúng tôi đang ở đâu, bước tiếp theo là gì, ai đang chịu trách nhiệm, và ngày dự kiến cuối cùng để ra mắt. </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="icon-park-outline:message-success" color="green" />
                    <div class="animate-glow absolute bg-green-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">Giao tiếp nhanh chóng</div>
                <div class="desc">Duy trì liên lạc chặt chẽ trong suốt dự án thiết kế web. Chúng tôi luôn sẵn sàng cho cuộc gọi và cuộc họp hàng ngày. </div>
              </div>
            </div>
          </div>


          <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="emojione:writing-hand-medium-light-skin-tone" />
                    <div class="animate-glow absolute bg-blue-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">
                  Nội dung chất lượng</div>
                <div class="desc">Chúng tôi tin rằng nên có một nội dung viết tốt để định hình thiết kế trang web, nên mỗi dự án mà chúng tôi tham gia đều bao gồm một nhà soạn thảo nội dung chuyên nghiệp. </div>
              </div>
            </div>
          </div>


          <div class="lg:col-span-4 sm:col-span-6 col-span-12 lg:-translate-y-16">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="icon-park-outline:electronic-locks-close" color="yellow" />
                    <div class="animate-glow absolute bg-yellow-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">
                  Không có chi phí ẩn</div>
                <div class="desc">
                  Khi chúng tôi đưa ra một mức giá cho trang web của bạn, chúng tôi tuân thủ nó. Không có bất ngờ, không có bất kỳ chi phí đặc biệt nào. Chỉ là công việc chân thành, trung thực với một chi phí hợp lý. </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="icon-park-outline:reload" color="orange" />
                    <div class="animate-glow absolute bg-orange-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">Dễ dàng cập nhật</div>
                <div class="desc text-center text-white/80">
                  Chúng tôi xây dựng trang web trên một hệ thống quản lý nội dung Vinawebapp Admin dễ dàng sử dụng và cung cấp đào tạo chi tiết, giúp bạn dễ dàng thực hiện các thay đổi trên trang web của mình.</div>
              </div>
            </div>
          </div>


        </div>

      </div>
      <div class="divider"></div>
      <div class=" w-full   py-3 pt-10 ">
        <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Quy trình</div>
        <div class="  text-center section-text ">Quy trình phát triển website ở Vinawebapp.com</div>
      </div>
      <div class="pb-20">

        <SectionSlideProcess />
      </div>
      <div class="divider "></div>


    </div>

    <SectionFooterTop v-if="companyData" :companyData="companyData" />
    <AppFooter :companyData="companyData" />


  </div>
</template>


<style></style>