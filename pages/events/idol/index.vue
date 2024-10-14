<script setup lang="ts">
definePageMeta({
  layout: "idol",
});
</script>
<template>
  <div class="page-root">
    <img
      alt="chairman"
      class="topback-img"
      src="C:\Users\rns07\ynufesDev_d\ynufes-tokiwa24\assets\images\idol-images\idol-topback.webp"
    />
    <div class="page-wrapper">
      <h1 id="info">INFORMATION</h1>
      <h2>入場料</h2>
      <p>無料</p>
      <h2>出演</h2>
      <div class="idol-shell">
        <img
          alt="chairman"
          class="idol-img"
          src="C:\Users\rns07\ynufesDev_d\ynufes-tokiwa24\assets\images\idol-images\RiD179.webp"
        />
        <p>RiD179日の物語</p>
      </div>
      <div class="idol-shell">
        <img
          alt="chairman"
          class="idol-img"
          src="C:\Users\rns07\ynufesDev_d\ynufes-tokiwa24\assets\images\idol-images\suiseidroptune.webp"
        />
        <p>彗星♩droptune°</p>
      </div>
      <div class="idol-shell">
        <img
          alt="chairman"
          class="idol-img"
          src="C:\Users\rns07\ynufesDev_d\ynufes-tokiwa24\assets\images\idol-images\darlia.webp"
        />
        <p>Darli'a</p>
      </div>
      <div class="idol-shell">
        <img
          alt="chairman"
          class="idol-img"
          src="C:\Users\rns07\ynufesDev_d\ynufes-tokiwa24\assets\images\idol-images\sevendeuce.webp"
        />
        <p>Seven Deuce</p>
      </div>
      <h2>日程</h2>
      <p>2024年11月3日(日) 11:00 - 12:00</p>
      <p>（物販・特典企画 12:30 - 14:00）</p>
      <h2>会場</h2>
      <p>横浜国立大学野外音楽堂</p>
      <p>【雨天時】横浜国立大学　経営2号館109教室</p>
    </div>
    <div class="black-flame">
      <p>提供</p>
      <div class="img-box">
        <img
          alt="chairman"
          class="cfc-img"
          src="C:\Users\rns07\ynufesDev_d\ynufes-tokiwa24\assets\images\idol-images\cofes-img.webp"
        />
      </div>
      <p>お問い合わせ</p>
      <p>会社名</p>
      <p>URL</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.topback-img {
  width: 100vw;
}

h1 {
  text-align: center;
}
h2 {
  text-align: center;
}
p {
  text-align: center;
}
#info {
  color: #e2b5c5;
}
.idol-img {
  width: 60vw;
  margin-left: 20vw;
}

.img-box {
  text-align: center;
}
.cfc-img {
  width: 200px;
}
</style>
