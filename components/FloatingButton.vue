<script lang="ts" setup>
function goClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="floating-button">
    <a href="#" @click.prevent="goClick">
      <img src="~/assets/images/FloatingButton.webp" alt="トップに戻るボタン" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/scss/_breakpoint.scss';

.floating-button > a > img {
  border: #0005 0.2px solid;
  width: 80px;
  aspect-ratio: 1;
  box-sizing: border-box;
  text-align: center;
  opacity: 0.7;
  position: fixed;
  bottom: -10px;
  right: 20px;
  z-index: 10000;

  @include md {
    width: 60px;
    opacity: 1;
    bottom: 1px;
    right: 10px;
  }

  &:hover {
    opacity: 1;
    transition: transform 0.3s ease;
    transform: translateY(-7px);
  }
}
</style>
