<script lang="ts" setup>
const props = defineProps({
  subTitle: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="subtitle-wrapper">
    <div class="subtitle">
      <h2>{{ props.subTitle }}</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.subtitle-wrapper{
  display: flex;
  justify-content: center;
}
.subtitle{
  border-radius: 2em;
  width: auto;
  height: 5em;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #000000;
  @include sm {
    height: 3.5em;
  }
  h2{
    margin: 1em 2.5em;
    @include sm {
      font-size: 16px;
    }
  }
}

</style>
