<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderComponent from '~/components/HeaderComponent.vue'

interface Lantern {
  id: number
  style: {
    left: string
    animationDuration: string
    backgroundImage: string
  }
}

const lanterns = ref<Lantern[]>([])
const images = ['images/lantern1.webp', 'images/lantern2.webp']

const conf = useRuntimeConfig()

function createLantern() {
  const id = Date.now() + Math.random()
  const image = images[Math.floor(Math.random() * images.length)]
  // URLを用いてbaseURLを追加
  const style = {
    left: `${Math.random() * 100}vw`,
    animationDuration: `${8 + Math.random() * 4}s`,
    //animationDelay: `${Math.random() * 5}s`, // ランダムな遅延を追加
    backgroundImage: `url(${conf.app.baseURL}${image})`,
  }
  lanterns.value.push({ id, style })
}

function checkLanterns() {
  while (lanterns.value.length < 7) {
    // ランタンの数を2倍に増やす
    createLantern()
  }
}

onMounted(() => {
  checkLanterns()
  setInterval(checkLanterns, 1000)
})
</script>
<template>
  <div class="layout-root">
    <HeaderComponent />
    <slot />
    <div class="background-container">
      <div class="background-img" />
      <!-- ランタンのコンテナ -->
      <div class="lantern-container">
        <div
          v-for="lantern in lanterns"
          :key="lantern.id"
          :style="lantern.style"
          class="lantern"
        />
      </div>
    </div>
    <!-- <FloatingButton /> -->
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.layout-root {
  font-family: 'Sawarabi Mincho', sans-serif;
  color: #000000;
  position: relative;
  font-size: 24px;
  @include lg {
    font-size: 22px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}

p {
  font-size: 24px;
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}

.background-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  overflow: hidden;
}

.background-img {
  background-image: url(@/assets/images/home-background-image.webp);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  @include sm {
    background-image: url(@/assets/images/mobile-background-image.webp);
  }
}

.lantern-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none; /* ランタンがクリックやタッチを妨げないようにする */
  z-index: -99;
}

.lantern {
  position: absolute;
  width: 100%;
  height: 100%;
  width: 5vw;
  height: 7vw;
  @include sm {
    width: 10vw;
    height: 14vw;
  }
  background-size: cover;
  animation: moveUp linear infinite;
  animation-delay: var(--animation-delay); /* 遅延を適用 */
}

@keyframes moveUp {
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-120px); /* 画面上部を少し超えるように修正 */
    opacity: 0; /* フェードアウト */
  }
}
</style>
