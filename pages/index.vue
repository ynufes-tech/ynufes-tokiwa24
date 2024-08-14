<script setup lang="ts"></script>

<template>
  <div class="page-root">
    <div class="title-container">
      <img id="top-title" src="@/assets/images/yumeakari.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#top-title {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: min(25vh,25vw);
  margin-top: 25vh;
  margin-left: 40vw;
  margin-right: auto;
  font-size: min(10em, 15vw);
  transform: translateX(-70%);
}
</style>
