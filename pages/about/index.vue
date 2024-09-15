<script setup lang="ts">
useHead({
  title: "About | 24常盤祭公式HP~夢灯~",
  meta: [
    { name: "description", content: "24常盤祭についての情報を掲載しています" },
  ],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="ABOUT" sub-title="常盤祭について" />
    <div class="box">
      <p>常盤祭は、毎年10月から11月に開催される横浜国立大学の大学祭です。</p>
      <p>
        美味しい食べ物がずらりと並ぶ模擬店、心揺さぶる音楽やダンスのパフォーマンス、そして思わず笑ってしまうような企画まで。
        <br />学園祭の煌めく高揚感は、キャンパス全体を鮮やかに彩ります。
      </p>
      <p>
        2024年度の常盤祭は、予約不要です。<br />
        ぜひ、ご友人やご家族とご一緒に、お気軽にお越しください。
      </p>
    </div>
    <div class="date-box">
      <div class="inner-date-box">
        <p>開催日時</p>
        <p>1日目：11月1日(金)　13:00 ― 20:30</p>
        <p>2日目：11月2日(土)　09:00 ― 20:30</p>
        <p>3日目：11月3日(日)　09:00 ― 15:30</p>
      </div>
    </div>
    <FloatingButton />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 500;
}

.box {
  background-color: #eee;
  padding: 1% 4%;
  opacity: 70%;
  border-radius: 2rem;
  margin: 0 8vw;
}
.date-box {
  display: flex;
  justify-content: center;
  background-color: #eee;
  opacity: 70%;
  border-radius: 2rem;
  margin: 5rem auto 0;
  width: 42.5vw;
  @include xl {
    width: 55vw;
  }
  @include lg {
    width: 67vw;
  }
  @include md {
    width: 72vw;
  }
  @include sm {
    width: 75vw;
  }
}
</style>
