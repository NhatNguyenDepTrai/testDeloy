<script    setup>
const calendly = useCalendly();
const handleClick = () => {
  calendly.initPopupWidget({
    url: 'https://calendly.com/nhatnguyen061003/vinawebapp-com',
  })
};
</script>
<template lang="">
 <div>
  <div id="btnContact" class="bottom-10 right-5"  @click="handleClick" >
    <div class="bg-blue-500/80 rounded-full md:w-10 md:h-10 h-8 w-8 flex items-center justify-center me-2">
     <Icon name="material-symbols:phone-forwarded-sharp" class="w-5"  />
    </div> <h3 class="uppercase ">Đặt lịch hẹn</h3>
  </div>

 </div>
</template>

<style scoped>
#btnContact {
  z-index: 100;
  padding: 10px;
  padding-right: 20px;
  border-radius: 40px;

  position: fixed;

  background: #7e00ad;
  border: solid 2px #7e00ad;
  cursor: pointer;
  transition: all 0.5s;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 640px) {
  #btnContact {

    background: #7e00ad;

    font-size: 16px;

  }
}

#btnContact:hover {
  padding-right: 50px;
  transition: all 0.5s;
}
</style>