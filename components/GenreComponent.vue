<script setup lang="ts">
const props = defineProps({
  genreTitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="genre-component">
    <div class="genre-title">
      <p class="genre-text">{{ props.genreTitle }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/_breakpoint.scss' as *;
.genre-component {
  display: flex;
  flex-direction: row;
  justify-content: start;
  .genre-title {
    background-color: #f6f6f6;
    border-radius: 0.3em;
    height: 1.2em;
    @include md {
      height: 0.8em;
    }
    .genre-text {
      margin: 0;
      @include md {
        font-size: 0.5em;
      }
    }
  }
}
</style>
