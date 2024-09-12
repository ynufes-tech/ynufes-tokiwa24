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
});
</script>
<template>
  <div class="table-of-contents">
    <NuxtLink :to="props.pageLink" @click="toggle">
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
@use "@/assets/scss/_breakpoint.scss" as *;
.table-of-contents {
  display: flex;
  flex-direction: column;
  font-weight: 100;
  //line-height: 2.5rem;
  > a {
    text-decoration: none;
    color: inherit;
  }
  @include md {
    line-height: 1.5rem;
  }
  @include sm {
    line-height: 1rem;
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
}
.table-box::before,
.table-box::after {
  content: "";
  width: 3px;
  height: 40px;
  background-color: #77bcff;
}
.table-box::before {
  margin-right: 30px;
  transform: rotate(-35deg);
}
.table-box::after {
  margin-left: 30px;
  transform: rotate(35deg);
}
.text-box {
  margin: 0;
  justify-content: center;
  text-align: center;
}
h1 {
  font-size: 1.5rem;
  letter-spacing: 0.135em;
  text-align: center;
  justify-content: center;
  border-bottom: solid 1.5px #000;
  margin: 0 30px;
  @include md {
    font-size: 2rem;
  }
  @include sm {
    font-size: 1.5rem;
  }
}
h2 {
  font-size: 1.5rem;
  letter-spacing: 0.06em;
  text-align: center;
  justify-content: center;
  @include md {
    font-size: 1.2rem;
  }
  @include sm {
    font-size: 0.8rem;
  }
}
</style>
