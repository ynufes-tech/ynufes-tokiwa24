<script setup lang="ts">
</script>

<template>
    <div class="page-root">
      <PageTitle title="ACCESS" sub-title="大学までのアクセス"/>
      <div class="page-wrapper">
        <div class="page-contents">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.2531241828697!2d139.58826227605002!3d35.473280572655035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601859679ea21c77%3A0x28d72ba15dae9e6c!2sYokohama%20National%20University!5e0!3m2!1sen!2sjp!4v1710676695264!5m2!1sen!2sjp"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="university-map"></iframe>
          <div class="subtitle-wrapper">
            <Sub-title subTitle="電車でのアクセス"/>
          </div>
          <SectionTitle sectionTitle="三ツ沢上駅からお越しの方"/>
          <img class="horizontal-maps" src="~/assets/images/access-images/mitsusawakamityo.webp" alt="三ツ沢上町駅周辺地図"/>
          <div class="button-wrapper">
            <WhiteButton text="三ツ沢上町駅からのルート" link="https://www.ynu.ac.jp/access/train_front.html"/>
          </div>
          <SectionTitle sectionTitle="和田町駅からお越しの方"/>
          <img class="vertical-maps" src="~/assets/images/access-images/wadamachi.webp" alt="和田町駅周辺地図"/>
          <div class="button-wrapper">
            <WhiteButton text="和田町駅からのルート" link="https://www.ynu.ac.jp/access/train_south.html"/>
          </div>
          <SectionTitle sectionTitle="羽沢横浜国大駅からお越しの方"/>
          <img class="horizontal-maps" src="~/assets/images/access-images/mitsusawakamityo.webp" alt="羽沢横浜国大駅周辺地図"/>
          <div class="button-wrapper">
            <WhiteButton text="羽沢横浜国大駅からのルート" link="https://www.ynu.ac.jp/access/train_hazawa.html"/>
          </div>
          <div class="subtitle-wrapper">
            <SubTitle subTitle="バスでのアクセス"/>
          </div>
          <SectionTitle sectionTitle="横浜駅から約20分"/>
          <p>相鉄バスと横浜市営バスは大学内へ乗り入れを行っています。
            （※平日のみ運行）</p>
          <WhiteButton text="横浜駅からのルート" link="https://www.ynu.ac.jp/access/bus.html"/>
        </div>
        <FloatingButton />
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

img{
  background-color: #ffffff;
}
iframe{
  margin-left: 10vw;
  width :50vw;
  aspect-ratio: auto;
  @include xl{
    width: 80vw;
  }
}
p{
  font-size: 32px;
  @include md{
    font-size: 24px;
  }
  @include sm{
    font-size: 16px;
  }
}
.page-contents{
  margin: 2vw 0 100px 0;
  @include sm{
    margin: 0;
  }
}
.subtitle-wrapper{
  margin-top: 5vh;
}
.horizontal-maps{
  width: 50vw;
  margin-left: 5vw;
  @include sm{
    width: 80vw;
    margin-left: 1em;
  }
}
.vertical-maps{
  width: 25vw;
  margin-left: 10vw;
  @include sm{
    width: 60vw;
    margin-left: 1em;
  }
}
.button-wrapper{
  margin: 2em 5vw 6em;
  @include sm{
    margin: 1em 5vw 3em;
  }

}
</style>