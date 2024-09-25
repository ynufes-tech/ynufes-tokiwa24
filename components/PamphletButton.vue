<script lang="ts" setup></script>

<template>
  <div class="pamphlet-button">
    <NuxtLink to="/pamphlet">
      <img
        src="~/assets/images/pamphlet-button-img.webp"
        class="pamphlet-button-img"
        alt="パンフレットボタン"
      />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.pamphlet-button {
  text-align: right;
  margin-right: 15vw;
}
.pamphlet-button-img {
  width: 300px;
  z-index: 10000;
}
</style>