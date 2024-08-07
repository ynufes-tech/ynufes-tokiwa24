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
  height: 25vh;
  margin-top: 25vh;
  margin-left: auto;
  margin-right: auto;
  font-size: min(10em, 15vw);
  transform: translateX(-70%);
}
</style>
