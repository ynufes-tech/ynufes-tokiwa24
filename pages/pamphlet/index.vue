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
                    <p>"下のボタンから電子版パンフレットをダウンロードいただけます。"</p>
                </div>
                <div class="download-button">
                    <p>通常版（ーーMB）</p>
                    <WhiteButton text="ダウンロード" link="https://www.ynu.ac.jp/access/train_front.html"/>
                    <p>軽量版（ーーMB）</p>
                    <WhiteButton text="ダウンロード" link="https://www.ynu.ac.jp/access/train_front.html"/>
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
  font-weight: 500;
}

.big-box{
  position: relative;
  top: 0px;
  padding-left: 8%;
  width: 84%;

  @include md {
    top: 0px;
  }
  @include sm {
    top: 0px;
  }
}

.picture-holder{
  width: 100%;
  padding-left: 5%;

  img {
    width: 100%;
  }
}

.about{
  display: flex;
  justify-content: flex-end;
  width: fit-content;
}

.download-button{
  display: flex;
  justify-content: center;
  font-size: 27px;
  @include md {
    flex-direction: column;
    width: 50vw;
  }
}

.button-contents {
  border-radius: 2em;
  border: solid 1.5px #333333;
  width: 15em;
  height: 3em;
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  background-color: white;
 @include sm {
   height: 2em;
  }

&:hover {
  background-color: #333333;
  color: #fff;
}

.button-text {
  padding-top: 1em;
  transition: 0.5s;
  text-decoration: none;
  color: #333333;
  font-weight: bold;
  @include sm {
    font-size: 12px;
    padding-top: 0.5em;
  }
  &:active {
    padding-top: 1.3em;
  }

  &:hover {
    color: #fff;
  }
}
}

p {
    font-size: 30px;

    @include md {
      font-size: 20px;
    }
    @include sm {
      font-size: 12px;
    }
 }

</style>