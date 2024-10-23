<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="ins-icon-holder">
    <a class="ins-icon" :href="props.link">
      <img src="~/assets/images/instagram-logo.webp" alt="sns-icon-x" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.ins-icon-holder {
  width: 3em;
  height: 3em;
  .ins-icon {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
