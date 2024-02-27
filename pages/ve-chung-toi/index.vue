<script  setup>
import { ref, onMounted } from 'vue';
import SectionShortAbout from '~/components/Section/SectionShortAbout.vue';

useHead({
  title: 'Về chúng tôi ',
  meta: [
    { name: 'title', content: 'Đôi điều về Vinawebapp.com' },
    { property: 'og:title', content: 'Công ty thiết kế website chuyên nghiệp của bạn' },
  ],
});

const props = defineProps({
  companyData: Object,
});


</script>
<template>
  <div>
    <div class="process">
      <img loading="lazy" src="~assets/img/bgAbout.jpeg" class="w-full h-auto opacity-25 absolute -top-20 -z-10" alt="Vinawebapp.com">
      <div class=" w-full page-padding  py-3 pt-10">
        <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Về chúng tôi</div>
        <div class="  text-center section-text "> Công ty thiết kế website chuyên nghiệp của bạn</div>
        <h3 class="md:text-xl  text-base text-gray-100/60 text-center   md:mb-5 mb-3  lg:pr-20  ">Vinawebapp.com - Một công ty thiết kế website đi trước thời đại nhiều năm ánh sáng</h3>
        <div class="w-full py-3 mb-5 text-center flex justify-center items-center">

          <img loading="lazy" width="570" height="auto" src="~/assets/img/badges.png" class=" md:my-10 my-6" alt="">
        </div>
      </div>


      <div class="relative page-padding page-hover  py-10  ">
        <div class=" w-full   py-3 pt-10">
          <div class="  text-center section-text ">Điều gì khiến chúng tôi khác biệt </div>
        </div>
        <div class="grid grid-cols-12 gap-4 py-20">

          <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
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
                  Khi chúng tôi đưa ra một mức giá cho trang web của bạn, chúng tôi tuân thủ nó. Không có bất ngờ, không có bất kỳ chi phí phát sinh nào. </div>
              </div>
            </div>
          </div>


          <div class="lg:col-span-4 sm:col-span-6 col-span-12  lg:-translate-y-16">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="jam:microchip" color="purple" />
                    <div class="animate-glow absolute bg-purple-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">
                  Công nghệ thời đại mới</div>
                <div class="desc">
                  Chúng tôi viết mã bằng tay để có các trang web nhanh, an toàn, đáng tin cậy và dễ truy cập.</div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="gg:website" color="pink" />
                    <div class="animate-glow absolute bg-pink-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">Trang web của bạn</div>
                <div class="desc">Thiết kế của chúng tôi luôn tùy chỉnh theo thương hiệu của bạn, không có mẫu sẵn, chỉ dành riêng cho một mình bạn.</div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="fluent-emoji:briefcase" />
                    <div class="animate-glow absolute bg-rose-950 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">Đối tác lâu dài</div>
                <div class="desc">Chúng tôi đầu tư vào thành công của bạn, cung cấp bảo hành và nâng cấp trọn đời.</div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4 sm:col-span-6 col-span-12 lg:-translate-y-16">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="emojione:military-medal" />
                    <div class="animate-glow absolute bg-yellow-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">Kinh nghiệm sâu rộng</div>
                <div class="desc">Chúng tôi sỡ hữu đội nhân sự có kinh nghiệm lâu năm được chọn lọc kĩ càng. </div>
              </div>
            </div>
          </div>



          <div class="lg:col-span-4 sm:col-span-6 col-span-12">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="twemoji:thumbs-up-dark-skin-tone" />
                    <div class="animate-glow absolute bg-amber-500 top-2 w-16 h-12  "> </div>
                  </div>

                </div>
                <div class="name">Thực tế</div>
                <div class="desc">Phong cách làm việc của Vinawebapp.com là thẳng thắng, trung thực và đi thằng vào vấn đề. </div>
              </div>
            </div>
          </div>



          <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="fluent-emoji:chart-increasing-with-yen" />
                    <div class="animate-glow absolute bg-lime-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">Chiến lược</div>
                <div class="desc text-center text-white/80">
                  Thiết kế web của chúng tôi dựa trên chiến lược dựa trên dữ liệu.</div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4 sm:col-span-6 col-span-12  lg:-translate-y-16 ">
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
                    <Icon name="fluent-emoji:dna" color="red" />
                    <div class="animate-glow absolute bg-red-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">Bàn giao đúng hẹn</div>
                <div class="desc">Thời gian thực hiện và hoàn thành dự án được xác định rõ ràng.</div>
              </div>
            </div>
          </div>



          <div class="lg:col-span-4 sm:col-span-6 col-span-12 hidden sm:block ">

          </div>
          <div class="lg:col-span-4 sm:col-span-6 col-span-12 lg:-translate-y-16">
            <div class="h-full">
              <div class="section_why_me_item">
                <div class="icon  flex w-full items-center justify-center">
                  <div class="relative">
                    <Icon name="material-symbols:screen-search-desktop-sharp" color="teal" />
                    <div class="animate-glow absolute bg-teal-500 top-2 w-16 h-12  "> </div>
                  </div>
                </div>
                <div class="name">Kinh nghiệm sâu rộng</div>
                <div class="desc">Chúng tôi sỡ hữu đội nhân sự có kinh nghiệm lâu năm được chọn lọc kĩ càng. </div>
              </div>
            </div>
          </div>




        </div>

      </div>
      <div class="divider"></div>
      <div class=" w-full   py-3 pt-10 ">
        <div class="relative page-padding   py-10  ">

          <div class="w-full grid grid-cols-12 gap-4 bg-short-about   rounded-lg border-white/10 border-2">
            <div class="lg:col-span-6 col-span-12 lg:order-2">
              <div class="p-5">
                <img loading="lazy" src="~assets/img/bgAbout.png" width="1000" height="1500" class="h-auto w-full" alt="Vinawebapp.com">
              </div>
            </div>


            <div class="lg:col-span-6 col-span-12 lg:order-1">
              <div class=" w-full flex items-center justify-start  ">
                <div class="lg:p-20 p-5">
                  <div class="section-sub-text color-blue  md:mb-5 mb-3">Đôi điều về chúng tôi</div>
                  <div class="section-text ">Vinawebapp.com</div>

                  <div class="text-formatting">
                    <p class="text-white/70  md:text-lg sm:text-base text-sm">Chúng tôi tự hào là một công ty thành lập với đội ngũ chuyên gia giàu kinh nghiệm và năng động, cam kết mang đến những giải pháp thiết kế website đẳng cấp, hiệu quả và độc đáo cho doanh nghiệp của bạn.</p>
                    <br>
                    <p class="text-white/70  md:text-lg sm:text-base text-sm">Chúng tôi không chỉ là những người làm việc, mà còn là những nghệ sĩ tạo ra tác phẩm nghệ thuật số. Với sự đam mê và tâm huyết, chúng tôi không ngừng nỗ lực để đáp ứng mọi yêu cầu của khách hàng, từ những ý tưởng sáng tạo đến công nghệ tiên tiến.</p>
                    <br>
                    <p class="text-white/70  md:text-lg sm:text-base text-sm">Dù ở bất kỳ đâu trên thế giới, chúng tôi luôn giữ liên lạc chặt chẽ qua các phương tiện truyền thông điện tử tiên tiến. Cuộc họp trực tuyến, thảo luận nhóm và sự chia sẻ ý tưởng là những phần quan trọng của ngày làm việc hàng ngày. </p>

                  </div>

                  <div class=" grid grid-cols-12 gap-4 py-10">
                    <div class="col-span-4 relative">
                      <div class=" lg:text-4xl text-2xl font-bold">
                        <div class="animate-glow absolute bg-red-500 top-2 w-16 h-12  "> </div>
                        <span>10</span>
                        <icon name="mi:add" />
                      </div>
                      <div class="md:text-lg text-sm text-white/80 ">năm kinh nghiệm</div>
                    </div>
                    <div class="col-span-4 relative">
                      <div class=" lg:text-4xl text-2xl font-bold">
                        <div class="animate-glow absolute bg-green-500 top-2 w-16 h-12  "> </div>
                        <span>200</span>
                        <icon name="mi:add" />
                      </div>
                      <div class="md:text-lg text-sm text-white/80 ">đối tác tin dùng</div>
                    </div>
                    <div class="col-span-4 relative">
                      <div class=" lg:text-4xl text-2xl font-bold">
                        <div class="animate-glow absolute bg-purple-500 top-2 w-16 h-12  "> </div>
                        <span>20</span>
                        <icon name="mi:add" />
                      </div>
                      <div class="md:text-lg text-sm text-white/80 ">nhân viên hỗ trợ 24/7</div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>




        </div>

      </div>

      <div class="divider "></div>


    </div>

    <SectionFooterTop v-if="companyData" :companyData="companyData" />
    <AppFooter :companyData="companyData" />


  </div>
</template>


<style></style>