<script setup lang="ts">
useHead({
  title: 'News | 24常盤祭公式HP~夢灯~',
  meta: [
    {
      name: 'description',
      content: '24常盤祭についての最新情報を掲載しています',
    },
  ],
})
</script>

<template>
  <div class="page-root">
    <PageTitle title="NEWS" sub-title="最新情報" />
    <div class="news-contents">
      <div class="about-news">
        <div class="inner-news">
          <p>24常盤祭は終了しました。</p>
        </div>
        <div class="update"><p>11/13 19:00 更新</p></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
.news-contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 8vw;
  width: 80vw;
}
.inner-news {
  background-color: #eee;
  padding: 1% 4%;
  opacity: 70%;
  border-radius: 2rem;
  margin: 0 8vw;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.update {
  display: flex;
  flex-direction: row-reverse;
  width: 90vw;
}
</style>
