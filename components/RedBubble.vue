<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  mainscript: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="white-bubble">
    <h1>{{ props.title }}</h1>
    <p>{{ props.mainscript }}</p>
    <p>{{ props.place }}</p>
    <p>{{ props.day }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.white-bubble {
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background-color: rgba(#EDD5FB, 0.7);
  text-align: center;
  @include xl{
    height: 470px;
    width: 470px;
  }
  @include lg{
    height: 440px;
    width: 440px;
  }
  @include md {
    height: 380px;
    width: 380px;
  }
  @include sm {
    height: 340px;
    width: 340px;
  }
  > h1 {
    margin: 20px auto;
    font-size: 25px;
    padding-top: 70px;
    width: 460px;
    @include md {
      font-size: 22px;
      width: 380px;
      padding-top: 60px;
      margin: 15px auto;
    }
    @include sm {
      width: 300px;
      font-size: 18px;
      padding-top: 50px;
      margin: 12px auto;
    }
  }
  > p {
    margin: 15px auto;
    width: 380px;
    padding: 0 30px;
    //white-space: pre-wrap;
    @include md {
      width: 340px;
      padding: 0 20px;
    }
    @include sm {
      width: 270px;
      padding: 0 15px;
    }
  }
}
</style>