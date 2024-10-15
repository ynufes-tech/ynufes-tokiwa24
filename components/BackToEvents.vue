<script lang="ts" setup></script>

<template>
  <div class="floating-button">
    <NuxtLink to="/events">
      <img
        src="~/assets/images/FloatingButton2.webp"
        class="floating-button-img"
        alt="企画一覧に戻るボタン"
      />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/scss/_breakpoint.scss';

.floating-button-img {
  display: block;
  width: 150px;
  box-sizing: border-box;
  padding-top: 30px;
  text-align: center;
  opacity: 0.5;
  position: fixed;
  bottom: 0;
  right: 20px;
  z-index: 10000;
}

.floating-button-img:hover {
  opacity: 1;
  transition: transform 0.3s ease;
  transform: translateY(-7px);
}

@include md {
  .floating-button-img {
    width: 60px;
    opacity: 1;
    border: none;
    background: none;
    bottom: 1px;
    right: 10px;
  }
}
</style>
