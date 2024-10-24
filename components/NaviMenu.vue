<script lang="ts" setup>
import { ref } from 'vue'

const showMenu = ref(false)
const toggle = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div class="navi-menu">
    <!-- メニューが展開されていないときのみボタンを表示 -->
    <img
      v-if="!showMenu"
      src="~/assets/images/menu-button.webp"
      alt="Menu Button"
      class="menu-button"
      @click="toggle"
    />
    <div v-show="showMenu" class="nav-list-wrapper">
      <!-- メニュー右上にバツ印ボタン -->
      <button class="close-button" @click="toggle">×</button>
      <nav>
        <ul class="nav-list">
          <li>
            <NuxtLink to="/" @click="toggle">TOP</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="toggle">ABOUT</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/access" @click="toggle">ACCESS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/staff" @click="toggle">STAFF</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/connection" @click="toggle">CONNECTION</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events" @click="toggle">EVENTS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contest" @click="toggle">CONTEST</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.navi-menu {
  z-index: 10000;
  position: relative;
}

.menu-button {
  right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 80px;

  @include md {
    width: 64px;
    height: 36px;
  }
}

/* 画像ボタンのホバーアクション */
.menu-button:hover {
  transform: scale(1.1);
}

.nav-list-wrapper {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 350px;
  padding: 1rem;
  background: linear-gradient(
    to bottom,
    rgba(180, 180, 180, 0.85),
    rgba(235, 235, 235, 0.85)
  );
  border-radius: 15px;
  z-index: 10000;
  @include md {
    width: 200px;
  }
}

/* メニュー右上のバツ印ボタン - 線を細くする */
.close-button {
  position: absolute;
  top: -8px;
  right: 5px;
  background: none;
  border: none;
  font-size: 5rem;
  font-weight: 100;
  cursor: pointer;
  color: #333333;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
}

/* リストの上部に余白を追加 */
.nav-list {
  list-style-type: none;
  padding: 2rem 1rem 0 1.5rem; /* 上部余白を追加し、左右の余白を調整 */
  margin: 0;
  @include md {
    padding: 2rem 0 0 0;
  }
}

.nav-list li {
  margin-bottom: 10px;
  padding-right: 10px;
  padding-left: 20px;

  @include md {
    padding-right: 0;
    padding-left: 5px;
  }

  &:hover {
    transform: translateY(-2px) scale(1.1); /* ホバー時に文字が大きくなる */
    color: #666666;
    transition: transform 0.3s ease;
  }
}

/* メニュー内の文字のホバーアクションで文字が大きくなる */
.nav-list li a {
  color: #333333;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 2px;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  line-height: 2.8rem;

  @include md {
    line-height: 2rem;
  }
}

.nav-list li a:hover {
  transform: scale(1.2); /* ホバー時に文字が大きくなる */
  color: #666666;
}

.nav-list li a.router-link-active {
  text-decoration: underline;
}
</style>
