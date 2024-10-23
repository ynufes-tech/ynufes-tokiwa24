<script setup lang="ts">
definePageMeta({ layout: 'idol' })
</script>
<template>
  <div class="page-root">
    <div id="header-blank" />
    <img
      alt="topback"
      class="topback-img"
      src="~/assets/images/idol-images/idol-topback.webp"
    />
    <div class="page-wrapper">
      <h1 id="info">INFORMATION</h1>
      <hr />
      <h2>入場料</h2>
      <p id="space">無料</p>
      <h2>出演</h2>
      <div class="idol-shell">
        <img
          alt="RiD179"
          class="idol-img"
          src="~/assets/images/idol-images/RiD179.webp"
        />
        <p>RiD179日の物語</p>
      </div>
      <div class="idol-shell">
        <img
          alt="suiseidroptune"
          class="idol-img"
          src="~/assets/images/idol-images/suiseidroptune.webp"
        />
        <p>彗星♩droptune°</p>
      </div>
      <div class="idol-shell">
        <img
          alt="darlia"
          class="idol-img"
          src="~/assets/images/idol-images/darlia.webp"
        />
        <p>Darli'a</p>
      </div>
      <div class="idol-shell">
        <img
          alt="sevendeuce"
          class="idol-img"
          src="C:~/assets/images/idol-images/sevendeuce.webp"
        />
        <p>Seven Deuce</p>
      </div>
      <h2>日程</h2>
      <p>2024年11月3日(日) 11:00 - 12:00</p>
      <p id="space">（物販・特典企画 12:30 - 14:00）</p>
      <h2>会場</h2>
      <p>横浜国立大学野外音楽堂</p>
      <p>【雨天時】横浜国立大学 経営2号館109教室</p>
    </div>
    <div class="black-flame">
      <p>提供</p>
      <div class="img-box">
        <img
          alt="chairman"
          class="cfc-img"
          src="~/assets/images/idol-images/cofes-img.webp"
        />
      </div>
      <p id="space">お問い合わせ: <u>ynu24kikaku@gmail.com</u></p>
      <!-- <p>会社名</p>
      <p>URL</p> -->
    </div>
  </div>
</template>
<style lang="scss">
body {
  margin: 0;
}
</style>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

#header-blank {
  height: 4rem;
  background: #000;
}

body {
  margin: 0;
}

.page-root {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.topback-img {
  width: 100%;
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

hr {
  color: #be8ec1;
  width: 150px;
}

#info {
  color: #e2b5c5;
}

#space {
  margin-bottom: 4rem;
}

.idol-shell {
  margin-bottom: 6rem;
}

.idol-img {
  width: 50vw;
  margin-left: 25vw;
  @include md {
    width: 80vw;
    margin-left: 10vw;
  }
}

.img-box {
  text-align: center;
}

.cfc-img {
  width: 200px;
}

.black-flame {
  width: 100%;
  background-color: #111111;
  color: #eeeeee;
}
</style>
