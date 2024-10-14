<script setup lang="ts"></script>

<template>
  <div class="page-root">
    <div class="page-title-frame">
      <h1>企画名</h1>
    </div>
    <div class="img-frame">
      <img alt="logo" class="img" src="~/assets/images/square-tmp.webp" />
      <img alt="logo" class="img" src="~/assets/images/square-tmp.webp" />
    </div>
    <div class="dark-frame">
      <h2>企画説明</h2>
      <p>
        ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○
      </p>
    </div>
    <div class="dark-frame">
      <h2>日時</h2>
      <p id="center">11月〇日（〇） ○○：○○～○○：○○</p>
      <p id="right">（開場&emsp;○○：○○～）</p>
      <h2>会場</h2>
      <p id="center">○○○○○○○○○○○○○○○○○○○○○○○</p>
      <h2>チケット代金</h2>
      <p id="center">○○○○円</p>
    </div>
    <div class="dark-frame">
      <h2>注意事項</h2>
      <p>
        ○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○
      </p>
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
.page-title-frame {
  height: 200px;
  background: rgba(0, 0, 0, 0.4);
  margin: 7rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @include md {
    margin: 5.3rem 0 1rem;
    height: 110px;
  }
}
h1 {
  color: #ddd;
  font-size: 60px;
  @include md {
    font-size: 40px;
  }
}
h2 {
  color: #ddd;
  text-align: center;
  margin: 4rem auto 1rem;
}
p {
  color: #ddd;
}
.img-frame {
  display: flex;
  margin: 5rem auto;
  @include md {
    margin: 1.2rem auto;
  }
}
.img {
  width: 300px;
  margin: 1rem;
  @include md {
    width: 200px;
  }
  @include sm {
    width: 150px;
  }
}
.dark-frame {
  margin: 2rem auto;
  padding: 0rem 10rem 1rem;
  width: 50vw;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  overflow-wrap: break-word;
  @include md {
    width: 75vw;
    padding: 0rem 2rem 1rem;
  }
  @include sm {
    width: 80vw;
    padding: 0rem 1rem 1rem;
  }
}
#center {
  text-align: center;
}
#right {
  text-align: right;
  margin-right: 8vw;
}
</style>
