<script lang="ts" setup>
const props = defineProps({
  sectionTitle: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="section-title-wrapper">
    <div class="section-title">
      <h2>{{ props.sectionTitle }}</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-title-wrapper{
  display: flex;
}
.section-title{
  border-radius: 2em;
  height: 5em;
  text-align: center;
  justify-content: left;
  text-decoration: underline;
  margin-left: 2em;
}

</style>
