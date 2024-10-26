<script setup lang="ts"></script>

<template>
  <div class="page-root">
    <PageTitle title="ACCESS" sub-title="大学までのアクセス" />
    <div class="page-wrapper">
      <div class="page-contents">
        <div class="contents">
          <h2>大学推奨ルートでの来場をお願いいたします。</h2>
        </div>
        <div class="iframe-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.2531241828697!2d139.58826227605002!3d35.473280572655035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601859679ea21c77%3A0x28d72ba15dae9e6c!2sYokohama%20National%20University!5e0!3m2!1sen!2sjp!4v1710676695264!5m2!1sen!2sjp"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="university-map"
          />
        </div>
        <div class="subtitle-wrapper">
          <Sub-title sub-title="電車でのアクセス" />
        </div>
        <SectionTitle section-title="三ツ沢上町駅からお越しの方" />
        <div class="maps">
          <img
            class="horizontal-maps"
            src="~/assets/images/access-images/mitsusawakamityo.webp"
            alt="三ツ沢上町駅周辺地図"
          />
        </div>
        <div class="button-wrapper">
          <WhiteButton
            text="詳しくはこちら"
            link="https://www.ynu.ac.jp/access/train_front.html"
          />
        </div>
        <SectionTitle section-title="和田町駅からお越しの方" />
        <div class="maps">
          <img
            class="vertical-maps"
            src="~/assets/images/access-images/wadamachi.webp"
            alt="和田町駅周辺地図"
          />
        </div>
        <div class="button-wrapper">
          <WhiteButton
            text="詳しくはこちら"
            link="https://www.ynu.ac.jp/access/train_south.html"
          />
        </div>
        <SectionTitle section-title="羽沢横浜国大駅からお越しの方" />
        <div class="maps">
          <img
            class="horizontal-maps"
            src="~/assets/images/access-images/hazawayokohamakokudai.webp"
            alt="羽沢横浜国大駅周辺地図"
          />
        </div>
        <div class="button-wrapper">
          <WhiteButton
            text="詳しくはこちら"
            link="https://www.ynu.ac.jp/access/train_hazawa.html"
          />
        </div>
        <div class="subtitle-wrapper">
          <SubTitle sub-title="バスでのアクセス" />
        </div>
        <SectionTitle section-title="横浜駅から約20分" />
        <div class="bus-info">
          <p>
            相鉄バスと横浜市営バスは大学内へ乗り入れを行っています。
            （※平日のみ運行）
          </p>
        </div>
        <WhiteButton
          text="詳しくはこちら"
          link="https://www.ynu.ac.jp/access/bus.html"
        />
      </div>
      <FloatingButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

img {
  background-color: #ffffff;
}

.iframe-wrapper {
  display: flex;
  justify-content: center;
}

iframe {
  width: 50vw;
  aspect-ratio: auto;
  @include xl {
    width: 80vw;
  }
}
p {
  font-size: 32px;
  @include md {
    font-size: 24px;
  }
  @include sm {
    font-size: 16px;
  }
}
.page-contents {
  margin: 3vh 3vw 100px 3vw;
  @include sm {
    margin-bottom: 5vh;
  }
}
.subtitle-wrapper {
  margin-top: 20vh;
  margin-bottom: 10vh;

  @include md {
    margin-top: 10vh;
    margin-bottom: 5vh;
  }
}

.maps {
  display: flex;
  justify-content: center;
}

.horizontal-maps {
  width: 50vw;
  @include sm {
    width: 80vw;
  }
}
.vertical-maps {
  width: 25vw;
  @include sm {
    width: 60vw;
  }
}
.button-wrapper {
  margin: 2em 0 6em;
  display: flex;
  justify-content: center;
  @include sm {
    margin: 1em 5vw 3em;
  }
}

.bus-info {
  display: flex;
  justify-content: center;
  margin: 0 2vw;

  @include md {
    margin-top: 0;
    margin-bottom: 0;
  }
}
.contents {
  display: flex;
  justify-content: center;
  padding-bottom: 0.3em;
}
</style>
