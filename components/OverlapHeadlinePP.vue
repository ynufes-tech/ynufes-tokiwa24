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
})
</script>
<template>
  <div class="overlap-headline">
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subTitle }}</h2>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
.overlap-headline {
  display: flex;
  flex-direction: column;
  //align-items: flex-start; /* 左揃え */
  text-align: left; /* テキストも左揃え */
  //height: calc(8vh + 8.5vw);
  height: 8.8rem;
  padding: 0;
  z-index: 1000;
  > h1 {
    margin: 0;
    padding: 0;
    font-size: 100px;
    letter-spacing: -3px;
    width: fit-content;
    color: rgba(224, 224, 224, 0.4); /* 色を40%にぼやかす */
    font-weight: 400;
    z-index: 1000;
    @include xl {
      font-size: 85px;
    }
    @include lg {
      font-size: 70px;
    }
    @include md {
      font-size: 50px;
    }
    @include sm {
      font-size: 40px;
    }
  }
  > h2 {
    align-self: flex-start;
    margin: 0;
    font-size: 38px;
    color: #ffffff;
    position: relative;
    top: -2.1em; /* h1との高さを調整 */
    left: 3rem;
    font-weight: 300;
    z-index: 1000;
    @include xl {
      font-size: 30px;
      top: -2.2em;
      left: 2rem;
    }
    @include lg {
      font-size: 25px;
      top: -2.2em;
      left: 2rem;
    }
    @include md {
      font-size: 24px;
      top: -1.9em;
      left: 1.5rem;
    }
    @include sm {
      font-size: 20px;
      top: -1.9em;
      left: 1rem;
    }
  }
}
</style>
