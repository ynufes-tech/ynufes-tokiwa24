<style>
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap");
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Lantern {
  id: number;
  style: {
    left: string;
    animationDuration: string;
    backgroundImage: string;
  };
}

const lanterns = ref<Lantern[]>([]);
const images = ['@/assets/images/lantern1.webp', '@/assets/images/lantern2.webp'];

function createLantern() {
  const id = Date.now() + Math.random(); // ユニークなIDを生成
  const image = images[Math.floor(Math.random() * images.length)]; // 画像をランダムに選択
  const style = {
    left: `${Math.random() * 100}vw`,
    animationDuration: `${8 + Math.random() * 4}s`,
    backgroundImage: `url(${image})`
  };
  lanterns.value.push({ id, style });

  setTimeout(() => {
    removeLantern(id);
    createLantern();
  }, (8 + Math.random() * 4) * 1000);
}

function removeLantern(id: number) {
  lanterns.value = lanterns.value.filter(lantern => lantern.id !== id);
}

function checkLanterns() {
  if (lanterns.value.length < 5) {
    createLantern();
  }
}

onMounted(() => {
  for (let i = 0; i < 5; i++) {
    createLantern();
  }
  setInterval(checkLanterns, 1000);
});
</script>
<template>
  <div class="layout-root">
    <slot />
    <div class="background-container">
      <img
        id="background-img"
        src="@/assets/images/home-background-image.webp"
      />
      <div class="container">
        <div
          v-for="lantern in lanterns"
          :key="lantern.id"
          :style="lantern.style"
          class="lantern"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout-root {
  font-family: "Sawarabi Mincho", sans-serif;
  color: #000000;
  position: relative;
}
#background-img {
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
}
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
}

.lantern {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: cover;
  animation: moveUp linear infinite;
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
    transform: translateY(-100px);
    opacity: 0;
  }
}
</style>
