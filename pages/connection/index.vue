<script setup lang="ts"></script>

<template>
    <div class="page-root">
        <PageTitleCnct title="CONNECTION" sub-title="他大学の学祭HP"/>
        <div class="inner-connection-page">
            <div class="connection-about">
             <p>横浜国立大学と繋がりがある大学の学園祭をご紹介させていただきます。</p>
            </div>
            <div class="connection-content">
                <div class="big-box">
                  <div class="box">
                   <p class="child-title">■東京学芸大学　小金井祭　</p>  
                   <p>【開催日程】<br>2024年　11/2(土)-11/4(月)</p>
                   <p>【公式HP】<br><a href="https://www.koganeisai.com">ホーム | 第72回小金井祭<br>(koganeisai.com)</a></p>
                  </div>
                  <div class="box">
                   <p class="child-title">■静岡大学　静大祭</p>
                   <p>【開催日程】<br>2024年　11/1(金)-11/3(日)</p>
                   <p>【公式HP】<br><a href="https://shizudaisai.jp/24/summer/">静大祭in静岡キャンパス<br>(shizudaisai.jp)</a></p>
                  </div>   
               </div>
            </div>
        </div>    
        <FloatingButton />      
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root{
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  > p{
    margin: 1rem 14vw;
  }
}

.inner-connection-page {
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

.connection-about {
  font-size: 27px;
  width: fit-content;
  text-shadow: 2px 2px 10px #eee;
  padding-left: 3%;
  @include md {
    font-size: 21px;
  }
  @include sm {
    font-size: 15px;
  }
}

.box{
  margin: 1rem;
}

.big-box{
  display: flex;
  width: min(80vw, 120vh);
  margin: 2rem auto 0;
  background-color: #eee;
  padding: 0% 4%;
  opacity: 70%;
  border-radius: 2rem;
  justify-content: space-between;

  @include md {
    flex-direction: column;
    width: 50vw;
  }
}
.child-title{
  font-size: 28px;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.247);
  @include md {
    font-size: 22px;
  }
  @include sm {
    font-size: 16px;
  }
}

p {
  font-size: 30px;

  @include lg {
    font-size: 23px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}

a {
  font-size: 30px;

  @include lg {
    font-size: 23px;
  }
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 17px;
  }
}
</style>