<script setup lang="ts">
import {register} from 'swiper/element/bundle';
register();

</script>

<template>
  <div class="swiper-wrapper">
    <swiper-container slides-per-view="1.0"
                      speed="2000"
                      loop="true"
                      css-mode="true"
                      autoplay="{ delay: 5000, disableOnInteraction: false }"
                      class="container"
    >
      <swiper-slide>
        <img src="~/assets/images/noimage.webp" alt="noimage" />
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/images/noimage.webp" alt="noimage" />
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/images/noimage.webp" alt="noimage" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped lang="scss">
.swiper-wrapper{
  width: 100vw;
  display: flex;
  justify-content: center;
}
.container{
  width: 50vw;
}
</style>