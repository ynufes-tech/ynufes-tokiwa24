<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  mainscript: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  imagepath: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="white-bubble">
    <div class="img-frame">
      <img :src="props.imagepath" alt="Bubble Image" class="bubble-image" />
    </div>
    <h1>{{ props.title }}</h1>
    <p>{{ props.mainscript }}</p>
    <p>{{ props.place }}</p>
    <p>{{ props.day }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.white-bubble {
  position: relative;
  height: 480px;
  width: 480px;
  border-radius: 50%;
  background-color: rgba(#edd5fb, 0.7);
  text-align: center;

  @include xl {
    height: 470px;
    width: 470px;
  }
  @include lg {
    height: 440px;
    width: 440px;
  }
  @include md {
    height: 380px;
    width: 380px;
  }
  @include sm {
    height: 340px;
    width: 340px;
  }
  .img-frame {
    display: flex;
    position: absolute;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: rgba(#edd5fb, 0.7);
    top: 80px; /* 少し上に移動 */
    left: -150px; /* 左に移動 */
  }

  .bubble-image {
    position: relative;
    justify-content: center;
    margin: auto;
    width: 130px; /* 画像のサイズを調整 */
    z-index: 1; /* 重なりを確実に上に */
  }

  > h1 {
    margin: 20px auto;
    font-size: 25px;
    padding-top: 70px;
    width: 460px;
    z-index: 2; /* テキストが画像の下に来ないように */
    position: relative;

    @include md {
      font-size: 22px;
      width: 380px;
      padding-top: 60px;
      margin: 15px auto;
    }
    @include sm {
      width: 300px;
      font-size: 18px;
      padding-top: 50px;
      margin: 12px auto;
    }
  }

  > p {
    margin: 15px auto;
    width: 380px;
    padding: 0 30px;
    z-index: 2; /* テキストが画像の下に来ないように */
    position: relative;

    @include md {
      width: 340px;
      padding: 0 20px;
    }
    @include sm {
      width: 270px;
      padding: 0 15px;
    }
    font-size: 18px;
    @include lg {
      font-size: 16px;
    }
    @include md {
      font-size: 14px;
    }
    @include sm {
      font-size: 12px;
    }
  }
}
</style>
