<script setup lang="ts"></script>
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
  background-color: #f6f6f6;
}
</style>
