<template>
  <div class="relative page-padding page-hover  py-10  bg-1">
    <div class=" w-full   py-3 pt-10">
      <div class="section-sub-text color-blue text-center  md:mb-5 mb-3">Tại sao chọn chúng tôi</div>
      <div class="  text-center section-text ">Chúng tôi khác biệt bởi vì </div>
    </div>
    <div class="grid grid-cols-12 gap-4 py-20">
      <div class="lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="h-full">
          <div class="section_why_me_item">
            <div class="icon">
              <Icon name="emojione:military-medal" />
            </div>
            <div class="name">Nhiều năm kinh nghiệm</div>
            <div class="desc">Chúng tôi sỡ hữu đội ngũ có hơn 10+ năm kinh nghiệm và chúng tôi luôn tự hào về quy trình tinh tế, vài bản và cũng như sự đổi mới liên tục của mình. </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-4 sm:col-span-6 col-span-12 lg:-translate-y-16">
        <div class="h-full">
          <div class="section_why_me_item">
            <div class="icon">
              <Icon name="emojione:globe-with-meridians" />
            </div>
            <div class="name">Công nghệ cao</div>
            <div class="desc">Vinawebapp.com luôn cập nhập, đổi mới các công nghệ theo xu hướng thời đại mới và cập nhập các công nghệ cũ, chúng tôi tự hào vì luôn tạo ra các bước tiến đột phá lớn trong dự án của khách hàng về lợi ích và lợi nhuận. </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
        <div class="h-full">
          <div class="section_why_me_item">
            <div class="icon">
              <Icon name="emojione:airplane-departure" />
            </div>
            <div class="name">Đinh hướng chiến lược</div>
            <div class="desc">Chúng tôi đưa ra quyết định bài bản về nội dung và thiết kế mang tính chiến lược cao dựa trên những dữ liệu bạn cũng cấp để đảm bảo rằng trang web của bạn sẽ mang lại cho dự án của bạn sẽ đem lại lợi nhuận cao. </div>
          </div>
        </div>
      </div>


      <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
        <div class="h-full">
          <div class="section_why_me_item">
            <div class="icon">
              <Icon name="emojione:clinking-beer-mugs" />
            </div>
            <div class="name">Tiếp thu ý kiến</div>
            <div class="desc">Chúng tôi coi trọng sự giao tiếp thẳng thắng, không vô nghĩa và sẽ luôn tiếp thu và sửa đổi theo các ý kiến có ích của khách hàng. </div>
          </div>
        </div>
      </div>


      <div class="lg:col-span-4 sm:col-span-6 col-span-12 lg:-translate-y-16">
        <div class="h-full">
          <div class="section_why_me_item">
            <div class="icon  ">
              <Icon name="devicon:google" />
            </div>
            <div class="name">Hiểu biết về SEO</div>
            <div class="desc">Chúng tôi xây dựng các trang web chất lượng cao. Các trang web của chúng tôi luôn được tối ưu SEO, tải nhanh và cung cấp trải nghiệm của người dùng - Tất cả những điều mà Google yêu thích. </div>
          </div>
        </div>
      </div>


      <div class="lg:col-span-4 sm:col-span-6 col-span-12 ">
        <div class="h-full">
          <div class="section_why_me_item">
            <div class="icon">
              <Icon name="emojione:construction-worker-dark-skin-tone" />
            </div>
            <div class="name">Bảo mật cao</div>
            <div class="desc text-center text-white/80">Đội ngũ lập trình viên của chúng tôi luôn có kinh nghiệm trong việc thiết kế webiste bảo mật cao, chống DDOS, hack website. Ngoài ra, chúng tôi còn xử lí các trường hợp quấy rối website cho bạn 24/7.</div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>
<script>
export default {
};
</script>
<style>
.section_why_me_item {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: rgb(255 255 255 / .1);
  background-color: rgb(21 22 47 / .5);
  padding: 20px 15px;
}

.section_why_me_item:hover {
  transform: translateY(-0.5rem);
  cursor: pointer;
  background: linear-gradient(to bottom, #8d329f, #5b8dcd);
  background-size: cover;
  background-blend-mode: overlay;
  transition: all 0.5s;

}

.section_why_me_item .icon {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.section_why_me_item .icon svg {
  width: 50px;
  height: 50px;
}

.section_why_me_item .name {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;

}

.section_why_me_item .desc {
  text-align: center;
  padding: 10px
}
</style>