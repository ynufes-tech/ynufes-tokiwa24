<script setup lang="ts"></script>

<template>
  <div class="page-root">
    <div class="title-container">
      <img id="top-title" src="@/assets/images/yumeakari.png" />
    </div>
    <div class="date">
      <p>From 2024.11.01 Fri</p>
      <p>&emsp;&emsp;&emsp;&nbsp;2024.11.02 Sat</p>
      <p>&nbsp;&nbsp;To&emsp;&nbsp;&nbsp;2024.11.03 Sun</p>
    </div>
    <div class="in-production">
      <p>このサイトはただいま制作中です。</p>
      <p>常盤祭に関する最新情報は随時公開されていきます。</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  position: relative;
  z-index: 10; /* コンテンツを最前面に配置 */
}

#top-title {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: min(25vh, 25vw);
  margin-top: calc(15vh + 6vw);
  margin-left: 20vw;
  @include xl {
    margin-left: 15vw;
  }
  @include lg {
    margin-left: 12vw;
  }
  @include md {
    margin-left: 10vw;
  }
  @include sm {
    margin-left: 8vw;
  }
  margin-right: auto;
}
.date {
  font-size: min(2.8rem, 5vw);
  box-sizing: border-box;
  margin: min(5rem, 5vw) auto 0;
  width: min(70vw, 30em);
  letter-spacing: 0.1125em;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  line-height: 0.45em;
  transform: translateX(13%);
  @include sm {
    margin-top: 38vw;
  }
}
.in-production {
  line-height: 0.45em;
  text-align: center;
  font-size: 2rem;
  margin-top: 4rem;
  @include lg {
    font-size: 1.8rem;
    margin-top: 6rem;
  }
  @include md {
    font-size: 1.2rem;
    margin-top: 8rem;
  }
  @include sm {
    font-size: 0.93rem;
  }
}
</style>
