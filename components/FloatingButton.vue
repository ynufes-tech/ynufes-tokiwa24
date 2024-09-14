<script lang="ts" setup>
function goClick() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="floating-button">
    <a href="#" @click.prevent="goClick">
      <img
        src="~/assets/images/FloatingButton.webp"
        class="floating-button-img"
        alt="トップに戻るボタン"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/_breakpoint.scss";

.floating-button-img {
  display: block;
  width: 100px;
  box-sizing: border-box;
  padding-top: 30px;
  text-align: center;
  opacity: 0.5;
  position: fixed;
  bottom: -15px;
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
