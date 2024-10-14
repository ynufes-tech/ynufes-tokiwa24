<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="fac-icon-holder">
    <a class="fac-icon" :href="props.link">
      <img src="~/assets/images/facebook-logo.webp" alt="sns-icon-x" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.fac-icon-holder {
  width: 3em;
  height: 3em;
  .fac-icon {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
