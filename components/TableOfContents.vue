<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  pageLink: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="table-of-contents">
    <NuxtLink :to="props.pageLink">
      <div class="table-box">
        <div class="text-box">
          <h1>{{ props.title }}</h1>
          <h2>{{ props.subTitle }}</h2>
        </div>
      </div>
    </NuxtLink>
  </div>
  <hr size="1px" color="#333333" />
</template>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
.table-of-contents {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 100;
  border-bottom: none;
  margin: 5rem 2rem 0;
  @include md {
    margin-top: 2rem;
    margin: 2rem 1rem 0;
  }
  > a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease;
  }
}
.table-box {
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.5);
  background-image: url(~/assets/images/monochrome-line.webp);
  background-size: contain;
  @include md {
    width: 140px;
    height: 140px;
    border-radius: 30px;
  }
}
.text-box {
  justify-content: center;
  padding-top: 7rem;
  @include md {
    padding-top: 3.1rem;
  }
}
h1 {
  font-size: 1.8rem;
  text-align: center;
  justify-content: center;
  border-bottom: solid 1.5px #000;
  margin: 0 30px;
  @include md {
    font-size: 0.85rem;
  }
}
h2 {
  margin-top: 0.4rem;
  font-size: 1.8rem;
  text-align: center;
  justify-content: center;
  @include md {
    font-size: 0.9rem;
  }
}
hr {
  display: none;
}
</style>
