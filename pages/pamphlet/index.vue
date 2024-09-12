<script setup lang="ts">
import WhiteButton from "~/components/WhiteButton.vue";

useHead({
    title: "常盤祭パンフレット | 24常盤祭公式HP~夢灯~",
    meta: [
      {
        name: "description",
        content: "常盤祭パンフレットのダウンロードはこちらから!!",
      },
    ],
  });
  </script>

<template>
    <div class="page-root">
     <PageTitle title="PAMPHLET" sub-title="パンフレット紹介"/>
        <div class="big-box">
            <div class="picture-holder">
                <img
                  alt="pamphlet"
                  class="pamphlet-img"
                  src="~/assets/images/pamphlet-tmp.png"
                />
            </div>
        
            <div class="box">
                <div class="about">
                    <p>下のボタンから電子版パンフレットをダウンロードいただけます。</p>
                </div>
                <div class="download">
                    <p>通常版（ーーMB）</p>
                    <div class="download-button">
                      <WhiteButton text="ダウンロード" link=""/>
                    </div>
                    <p>軽量版（ーーMB）</p>
                    <div class="download-button">
                      <WhiteButton text="ダウンロード" link=""/>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  display: flex;
  flex-direction: column;
}

.big-box{
  display: flex;
  position: relative;
  top: 0px;
  padding-left: 10%;
  width: 90%;


  @include md {
    flex-direction: column;
  }
}

.picture-holder{
  width: 45%;

  img {
    width: 100%;
  }
  @include md {
    flex-direction: column;
    width: 90%;
    top: 0px;
  }
}

.about{
  display: flex;
  width: fit-content;
  justify-content: end;
 
  @include md {
    display: flex;
    flex-direction: column;
    padding-left: 0%;
  }
}

.download{
  display: flex;
  flex-direction: column;
  padding-left: 35%;
  @include md {
    font-size: 10px;
  }
}

p {
    font-size: 21px;

    @include md {
      font-size: 14px;
    }
    @include sm {
      font-size: 6px;
    }
 }

</style>