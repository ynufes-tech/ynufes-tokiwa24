<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <a
    class="white-button"
    :href="link"
    rel="noopener noreferrer"
    target="_blank"
  >
    <p>{{ props.text }}</p>
  </a>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.white-button {
  display: flex;
  align-items: center;
  border-radius: 2em;
  width: fit-content;
  text-decoration: none;
  color: #000;
  background-color: #fff8;
  padding: 0 3em;
  box-sizing: border-box;
}
</style>
