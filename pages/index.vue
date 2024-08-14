<script setup lang="ts"></script>

<template>
  <div class="page-root">
    <div class="title-container">
      <img id="top-title" src="@/assets/images/yumeakari.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
// .title-conteinar{
//   margin-left: 10000rem;
// }
#top-title {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  //align-items: center;
  //justify-content: center;
  height: min(25vh,25vw);
  margin-top: calc(15vh + 6vw);
  margin-left: 20vw;
  @include xl {
    margin-left: 15vw;
  }
  @include lg {
    margin-left: 12vw;
  }
  @include md {
    margin-left: 10vw;
  }
  @include sm {
    margin-left: 8vw;
  }
  margin-right: auto;
  font-size: min(10em, 15vw);
  //transform: translateX(-70%);
}
</style>
