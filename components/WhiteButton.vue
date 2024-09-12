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
});
</script>
<template>
  <div class="white-button-wrapper">
    <a class="white-button" :href="link">
      <h2>{{ props.text }}</h2>
    </a>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.white-button-wrapper {
  display: flex;
  @include sm {
    justify-content: center;
  }
}
.white-button {
  border-radius: 2em;
  height: 5em;
  text-decoration: none;
  color: #000000;
  background-color: rgba(255, 255, 255, 0.5);
  @include sm {
    height: 3.5em;
  }
  h2 {
    margin: 1em 1em;
    @include sm {
      font-size: 16px;
    }
  }
}
</style>
