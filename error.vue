<script setup lang="ts">
import HeaderComponent from '~/components/HeaderComponent.vue'

useHead({
  title: "error-page",
});
</script>
<template>
    <NuxtLayout>
      <div class="error">
        <HeaderComponent />
        <!-- <PageTitle title="ERROR" sub-title="エラーコード：404" /> -->
        <div class="inner-error-page">
            <h1 id="main-404">404</h1>
          <p class="main">お探しのページは見つかりませんでした</p>
          <!-- <BackToHome /> -->
        </div>
      </div>
    </NuxtLayout>
  </template>
  <style lang="scss" scoped>
  @use "@/assets/scss/_breakpoint.scss" as *;
  .error{
    height: 1px;
  }
  .inner-error-page {
    position: relative;
    top: 200px;
    left: 10%;
    width: 80%;
    @include md {
      top: 200px;
    }
    @include sm {
      top: 150px;
    }
  }
  #main-404{
    font-size:120px;
    text-align: center;
    top: 0;
  }
  .main {
    font-size: 32px;
    color: #333333;
    text-align: center;
    margin: 10% auto 5%;
    @include md {
      font-size: 20px;
    }
    @include sm {
      font-size: 16px;
    }
  }
  </style>