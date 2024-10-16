<style>
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap");
</style>
<script setup lang="ts">
</script>
<template>
  <div class="layout-root">
    <Header />
    <slot />
    <FloatingButton />
  </div>
</template>
<style scoped lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;

.layout-root {
  font-family: "Sawarabi Mincho", sans-serif;
  color: #000000;
  background-color: #f6f6f6;

  position: relative;
  font-size: 24px;
  @include lg {
    font-size: 22px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}

p {
  font-size: 24px;
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}
</style>
