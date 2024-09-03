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
.subtitle-wrapper{
  display: flex;
  justify-content: center;
}
.subtitle{
  border-radius: 2em;
  width: 15em;
  height: 5em;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #000000;
}

</style>
