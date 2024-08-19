<script lang="ts" setup></script>

<template>
  <div class="floating-button">
    <a href="#">
      <img
        src="~/assets/images/FloatingButton.webp"
        class="floating-button-img"
        onclick="goClick()"
        alt="トップに戻るボタン"
    /></a>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/_breakpoint.scss";
.floating-button-img {
  display: block;
  width: 100px; //大きさを決める
  box-sizing: border-box;
  padding-top: 30px;
  text-align: center;
  opacity: 0.5;
  position: fixed; //画面の中でも位置を固定
  bottom: -15px; //めっちゃ下側に置く
  right: 20px; //めっちゃ右側に置く
  z-index: 10000; //他のものと重なったときに上に表示されるように
}
.floating-button-img::before {
  content: "";
  display: block;
  width: 25%;
  height: 25%;
  top: 25%;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  transform: rotate(-45deg);
}
.floating-button-img:hover {
  opacity: 1;
}
@include md {
  .floating-button-img {
    width: 60px; //スマホ版だと少し小さくなる
    opacity: 1;
    border: none;
    background: none;
    bottom: 1px;
    right: 10px;
  }
  .floating-button-img::before {
    bottom: 0;
  }
}
</style>
