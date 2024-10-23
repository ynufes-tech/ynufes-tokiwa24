<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="x-icon-holder">
    <a
      class="x-icon"
      :href="props.link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src="~/assets/images/x-white.webp" alt="sns-icon-x" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.x-icon-holder {
  width: 3em;
  height: 3em;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .x-icon {
    width: 2em;
    height: 2em;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
