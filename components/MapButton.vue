<script lang="ts" setup></script>

<template>
  <div class="map-button">
    <a href="https://maps.app.goo.gl/N5CjaVR7Ro3MSTiKA">
      <img
        src="~/assets/images/map-button.webp"
        class="map-button-img"
        alt="マップボタン"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
.map-button {
  display: block;
  width: 100px;
  height: auto;
  box-sizing: border-box;
  text-align: center;
  position: fixed;
  top: 150px;
  right: 60px;
  z-index: 10000;
}
.map-button-img {
  width: 8rem;
  @include md {
    width: 4rem;
    position: fixed;
    top: 120px;
    right: 20px;
  }
  @include sm {
    width: 3rem;
    position: fixed;
    top: 100px;
    right: 20px;
  }
}

.map-button:hover {
  transition: transform 0.3s ease;
  transform: scale(1.1);
}
</style>
