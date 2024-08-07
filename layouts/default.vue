<script setup lang="ts"></script>
<template>
  <div class="layout-root">
    <slot />
    <div class="background-container">
      <img
        id="background-img"
        src="@/assets/images/home-background-image.webp"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout-root {
  position: relative;
}
#background-img {
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
