<script setup lang="ts">
// import WhiteButton from "~/components/WhiteButton.vue";

useHead({
  title: 'Pamphlet | 24常盤祭のパンフレット紹介',
  meta: [
    { name: 'description', content: '24常盤祭のパンフレットをご紹介します' },
  ],
})
</script>

<template>
  <div class="page-root">
    <PageTitle title="PAMPHLET" sub-title="パンフレット紹介" />
    <div class="big-box">
      <div class="picture-holder">
        <img
          alt="pamphlet"
          class="pamphlet-img"
          src="~/assets/images/poster.webp"
        />
      </div>

      <div class="box">
        <div class="about">
          <p>下のボタンから電子版パンフレットをダウンロードいただけます。</p>
        </div>
        <div class="download">
          <p>通常版（68.8MB）</p>
          <div class="download-button">
            <WhiteButton
              text="ダウンロード"
              link="https://storage.googleapis.com/tokiwa24-assets/tokiwa24-pamphlet-high.pdf"
            />
          </div>
          <p>軽量版（22.9MB）</p>
          <div class="download-button">
            <WhiteButton
              text="ダウンロード"
              link="https://storage.googleapis.com/tokiwa24-assets/tokiwa24-pamphlet-light.pdf"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="prepare"> -->
    <!-- <h1>準備中</h1> -->
    <!-- </div> -->
    <FloatingButton />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.page-root {
  display: flex;
  flex-direction: column;
}

.big-box {
  display: flex;
  position: relative;
  top: 0;
  padding-left: 10%;
  width: 90%;

  @include md {
    width: 100%;
    flex-direction: column;
    padding: 0 2em;
    box-sizing: border-box;
  }
}

.picture-holder {
  width: max(50%, 500px);

  img {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 450px;
  }

  @include md {
    flex-direction: column;
    width: 100%;
    top: 0;
    img {
      max-width: 350px;
    }
  }
}

.about {
  padding: 0 1em;
  display: flex;
  width: fit-content;
  justify-content: end;

  @include md {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}

.download {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include md {
    font-size: 10px;
  }
}

p {
  font-size: 21px;

  @include md {
    font-size: 16px;
  }
}
.prepare {
  display: flex;
  justify-content: center;
  margin-top: 5%;
}
</style>
