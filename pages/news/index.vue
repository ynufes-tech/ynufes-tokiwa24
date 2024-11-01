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
          <p>
            本日は講義棟内企画と図書館企画のみの開催となります。屋外の企画は中止です。<br />また、「山崎怜奈のトークセッション
            in YNU 2024」は実施予定です。<br /><br />今後開催規模を縮小する場合もありますのでご注意ください。
          </p>
        </div>
        <div class="update"><p>11/2 6:30 更新</p></div>
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
