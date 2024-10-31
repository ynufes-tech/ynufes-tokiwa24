<script setup lang="ts"></script>

<template>
  <div class="page-root">
    <PageTitleCnct title="CONNECTION" sub-title="他大学の学祭HP" />
    <div class="inner-connection-page">
      <div class="connection-about">
        <p>他大学の大学祭をご紹介させていただきます。</p>
      </div>
      <div class="connection-content">
        <div class="big-box">
          <div class="box">
            <p class="child-title">■東京学芸大学&emsp;小金井祭</p>
            <p>【開催日程】<br />2024年&emsp;11/2(土)-11/4(月)</p>
            <p>
              【公式HP】<br /><a href="https://www.koganeisai.com"
                >ホーム | 第72回小金井祭<br />(koganeisai.com)</a
              >
            </p>
          </div>
          <div class="box">
            <p class="child-title">■静岡大学&emsp;静大祭</p>
            <p>【開催日程】<br />2024年&emsp;11/1(金)-11/3(日)</p>
            <p>
              【公式HP】<br /><a href="https://shizudaisai.jp/24/summer/"
                >静大祭in静岡キャンパス<br />(shizudaisai.jp)</a
              >
            </p>
          </div>
          <div class="box">
            <p class="child-title">■防衛大学&emsp;開校記念祭</p>
            <p>【開催日程】<br />2024年&emsp;11/9(土)-11/10(日)</p>
            <p>
              【公式HP】<br /><a
                href="https://www.nda.ac.jp/Festival/"
                rel="noopener noreferrer"
                target="_blank"
                >防衛大学開校記念祭<br />(nda.ac.jp)</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <FloatingButton />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.page-root {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;

  > p {
    margin: 1rem 14vw;
  }
}

.inner-connection-page {
  position: relative;
  top: 0;
}

.connection-content {
  display: flex;
  justify-content: center;
}

.connection-about {
  font-size: 27px;
  width: fit-content;
  text-shadow: 2px 2px 10px #eee;
  padding-left: 8vw;
  @include md {
    font-size: 21px;
  }
  @include sm {
    font-size: 15px;
  }
}

.box {
  margin: 1rem;
  width: 18em;
}

.big-box {
  display: flex;
  width: min(80vw, 120vh);
  margin: 2rem auto 4vh;
  background-color: #eee;
  padding: 0 4%;
  opacity: 70%;
  border-radius: 2rem;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  @include md {
    flex-direction: column;
    width: 80vw;
  }
  @include sm {
    width: min(80vw, 120vh);
  }
}

.child-title {
  font-size: 28px;
  text-shadow: 0 4px 3px rgba(0, 0, 0, 0.247);
  @include md {
    font-size: 22px;
  }
  @include sm {
    font-size: 16px;
  }
}

p {
  font-size: 30px;

  @include lg {
    font-size: 23px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}

a {
  font-size: 30px;

  @include lg {
    font-size: 23px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}
</style>
