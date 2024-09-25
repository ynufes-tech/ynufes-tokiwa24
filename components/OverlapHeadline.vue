<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="overlap-headline">
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subTitle }}</h2>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.overlap-headline {
  display: flex;
  flex-direction: column;
  //align-items: flex-start; /* 左揃え */
  text-align: left; /* テキストも左揃え */
  height: calc(8vh + 8.5vw);
  padding: 0;
  z-index: 1000;
  @include md {
    
  }
  @include sm {
    
  }
  > h1 {
    margin: 0;
    font-size: 100px;
    letter-spacing: -3px;
    width: fit-content;
    color: rgba(224, 224, 224, 0.5); /* 色を50%にぼやかす */
    font-weight: 400;
    z-index: 1000;
    @include xl {
      font-size: 90px;
    }
    @include lg {
      font-size: 88px;
    }
    @include md {
      font-size: 58px;
    }
    @include sm {
      font-size: 50px;
    }
  }
  > h2 {
    align-self: flex-start;
    margin: 0;
    font-size: 38px;
    color: #ffffff;
    position: relative;
    top: -2.46em; /* h1との高さを調整 */
    left: 3rem;
    font-weight: 300;
    z-index: 1000;
    @include xl {
      font-size: 30px;
      top: -2.4em;
      left: 2rem;
    }
    @include lg {
      font-size: 25px;
      top: -2.41em;
      left: 2rem;
    }
    @include md {
      font-size: 19px;
      top: -2.3em;
      left: 1.5rem;
    }
    @include sm {
      font-size: 15px;
      top: -2.3em;
      left: 1rem;
    }
  }
}
</style>
