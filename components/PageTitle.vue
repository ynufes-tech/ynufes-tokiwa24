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
  <div class="page-title">
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subTitle }}</h2>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-title {
  margin: 0 auto;
  position: absolute;
  top: 125px;
  left: 15%;
  z-index: 1000;
  //background-color: rgba(0, 0, 0, 0.7); /* 背景色を追加 */

  @include md {
    top: 100px;
  }
  @include sm {
    top: 90px;
  }
  > h1 {
    display: flex;
  flex-direction: column;
  box-sizing: border-box;
    margin: 0 auto;
    font-size: 150px;
    font-weight: 700;
    width: fit-content;
    color: rgba(226, 181, 197, 0.6); /* 色を60%にぼやかす */
    //opacity: 0.4;
    font-weight: 400;
    z-index: 1000;
    @include md {
      font-size: 94px;
    }
    @include sm {
      font-size: 64px;
    }
  }
  > h2 {
    margin: 0 auto;
    font-size: 40px;
    color: #ffffff;
    position: absolute;
    top: 53%;
    left: 6%;
    width: fit-content;
    font-weight: 300;
    z-index: 1000;
    @include md {
      font-size: 28px;
    }
    @include sm {
      font-size: 18px;
    }
  }
}
</style>
