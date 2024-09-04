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
    <a class=white-button :href="link">
      <h2>{{ props.text }}</h2>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.white-button-wrapper{
  display: flex;
}
.white-button{
  border-radius: 2em;
  height: 5em;
  text-align: center;
  justify-content: left;
  text-decoration: none;
  margin-left: 6em;
  color: #000000;
  background-color: rgba(255, 255, 255, 0.5);
  h2{
    margin: 1em 4em;
  }
}

</style>
