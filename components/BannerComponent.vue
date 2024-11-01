<script lang="ts" setup></script>
<template>
  <div class="banner-component">
    <NuxtLink to="/events/idol" class="banner">
      <img
        src="~/assets/images/idol-banner.webp"
        class="banner-image"
        alt="idol-event-link"
      />
    </NuxtLink>
    <div class="eye-ceiver">
      <a href="https://www.hazawa-kubotaganka.com/" class="banner">
        <img
          src="~/assets/images/eye-clinic.webp"
          class="banner-image"
          alt="sponsor-link"
        />
      </a>
      <a href="https://www.next-gears.net/" class="banner">
        <img
          src="~/assets/images/transceiver.webp"
          class="banner-image"
          alt="sponsor-link"
        />
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'assets/scss/_breakpoint.scss';

.banner-component {
  display: flex;
  @include md {
    display: flex;
    flex-direction: column;
  }
}

.banner {
  margin: 0.3vw;
  width: 25vw;
  display: flex;
  align-items: center;
  @include md {
    width: 60vw;
    margin: 1vw;
  }
}

.banner-image {
  width: 100%;
  height: auto;
}
</style>
