<script lang="ts" setup></script>
<template>
  <div class="header-component">
    <div class="logo-wrapper">
      <NuxtLink class="header-icon" to="/">
        <img src="~/assets/images/tokiwa24_logo.webp" class="header-img" />
      </NuxtLink>
      <NaviMenu />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.header-component {
  display: flex;
  z-index: 10000;
  position: absolute;
}

.logo-wrapper {
  width: fit-content;
  align-items: center;
  position: fixed;
  top: 0.2%;
  left: 5%;

  .header-icon {
    display: flex;
    text-decoration: none;

    > img {
      margin-right: 20px;
      @include md {
        transform: scale(0.8);
      }
      @include sm {
        transform: scale(0.7);
      }
    }
  }
}

.header-img {
  width: 10rem;
  @include md {
    width: 8rem;
  }
  @include sm {
    width: 7rem;
  }
}
</style>
