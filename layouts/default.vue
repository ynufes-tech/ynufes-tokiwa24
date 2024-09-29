<style>
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap");
</style>
<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Lantern {
  id: number;
  style: {
    left: string;
    animationDuration: string;
    backgroundImage: string;
  };
}

const lanterns = ref<Lantern[]>([]);
const images = ["/images/lantern1.webp", "/images/lantern2.webp"];

function createLantern() {
  const id = Date.now() + Math.random();
  const image = images[Math.floor(Math.random() * images.length)];
  const style = {
    left: `${Math.random() * 100}vw`,
    animationDuration: `${8 + Math.random() * 4}s`,
    //animationDelay: `${Math.random() * 5}s`, // ランダムな遅延を追加
    backgroundImage: `url(${image})`,
  };
  lanterns.value.push({ id, style });
}

function checkLanterns() {
  while (lanterns.value.length < 7) {
    // ランタンの数を2倍に増やす
    createLantern();
  }
}

onMounted(() => {
  checkLanterns();
  setInterval(checkLanterns, 1000);
});
const shootingStars = ref<{ id: number; style: any }[]>([]);

function createShootingStar() {
  const id = Date.now() + Math.random();
  const left = `${Math.random() * 30}vw`; // 左上あたりに流れる位置を調整
  const top = `${Math.random() * 20}vh`;
  const duration = "2s"; // 流れ星が流れる時間

  const style = {
    left,
    top,
    width: "2px",
    height: "100px",
    backgroundColor: "white",
    animationDuration: duration,
  };

  shootingStars.value.push({ id, style });

  // 流れ星を2秒後に削除する
  setTimeout(() => {
    shootingStars.value = shootingStars.value.filter((star) => star.id !== id);
  }, 2000);
}

function createShootingStars() {
  for (let i = 0; i < 3; i++) {
    setTimeout(createShootingStar, i * 300); // 300msごとに1つ流れ星を生成
  }
}

onMounted(() => {
  setInterval(createShootingStars, 8000); // 8秒ごとに流れ星を生成
});
</script>
<template>
  <div class="layout-root">
    <Header />
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
        ></div>
      </div>
      <div class="shooting-star-container">
        <div
          v-for="star in shootingStars"
          :key="star.id"
          :style="star.style"
          class="shooting-star"
        ></div>
      </div>
    </div>
    <!-- <FloatingButton /> -->
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.layout-root {
  font-family: "Sawarabi Mincho", sans-serif;
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
  background-image: url(~/assets/images/home-background-image.webp);
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
    background-image: url(~/assets/images/mobile-background-image.webp);
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
.shooting-star-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* 流れ星がクリックを妨げないようにする */
  z-index: -98; /* ランタンの下に表示される */
}

.shooting-star {
  position: absolute;
  background-color: white;
  width: 2px;
  height: 100px; /* 筋の長さを長く設定 */
  transform-origin: left top;
  animation: shootingStar linear;
  animation-duration: 0.01s; /* スピードを早くする */
}

@keyframes shootingStar {
  0% {
    transform: translate(0, -150px) rotate(45deg); /* 右上から始まる位置 */
    opacity: 1;
  }
  100% {
    transform: translate(-300px, 300px) rotate(45deg); /* 左下に消える位置 */
    opacity: 0;
  }
}
</style>
