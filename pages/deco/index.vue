<script setup lang="ts">
useHead({
  title: "Deco | 24常盤祭の装飾品紹介",
  meta: [
    { name: "description", content: "24常盤祭の装飾品をご紹介します" },
  ],
});
</script>

<template>
    <div class="page-root">
      <PageTitle title="DECO" sub-title="装飾品紹介" />
        <!-- <div class="inner-deco-page">
            <div class="deco-about">
                <p>常盤祭を彩る装飾品をご紹介させていただきます。</p>
            </div>
            <div class="big-box">
                <div class="deco-headline">
                    <p>
                        <a href="">1.装飾品の名前<br /></a>
                        <a href="">2.装飾品の名前<br /></a>
                        <a href="">3.装飾品の名前<br /></a>
                        <a href="">4.装飾品の名前<br /></a>
                        <a href="">5.装飾品の名前<br /></a>
                        <a href="">6.装飾品の名前<br /></a>
                    </p>
                </div>
                <div class="deco-content">
                    <div class="section">
                        <div class="child-title">
                            <div class="patterns">
                                <img
                                    alt="pattern"
                                    class="deco-pattern1"
                                    src="/assets/images/deco-images/deco-pattern_1.webp"
                                />
                                <img
                                    alt="pattern"
                                    class="deco-pattern2"
                                    src="/assets/images/deco-images/deco-pattern_2.webp"
                                />
                                </div>
                            <div class="name">
                                <p>装飾品の名前</p>
                            </div>
                        </div>
                        <div class="explanation">
                            <p>装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ</p>
                        </div>
                        <div class="picture-holder">
                            <img
                              alt="decoration"
                              class="deco-img"
                              src="/assets/images/deco-images/deco-tmp.png"
                            />
                        </div>
                        <div class="place">
                            <p>【展示場所】<br />場所説明</p>
                        </div>
                    </div>
                     <div class="section">
                        <div class="child-title">
                            <div class="patterns">
                                <img
                                    alt="pattern"
                                    class="deco-pattern1"
                                    src="/assets/images/deco-images/deco-pattern_1.webp"
                                />
                                <img
                                    alt="pattern"
                                    class="deco-pattern2"
                                    src="/assets/images/deco-images/deco-pattern_2.webp"
                                />
                                </div>
                            <div class="name">
                                <p>装飾品の名前</p>
                            </div>
                        </div>
                        <div class="explanation">
                            <p>装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ</p>
                        </div>
                        <div class="picture-holder">
                            <img
                              alt="decoration"
                              class="deco-img"
                              src="/assets/images/deco-images/deco-tmp.png"
                            />
                        </div>
                        <div class="place">
                            <p>【展示場所】<br />場所説明</p>
                        </div>
                    </div>
                     <div class="section">
                        <div class="child-title">
                            <div class="patterns">
                                <img
                                    alt="pattern"
                                    class="deco-pattern1"
                                    src="/assets/images/deco-images/deco-pattern_1.webp"
                                />
                                <img
                                    alt="pattern"
                                    class="deco-pattern2"
                                    src="/assets/images/deco-images/deco-pattern_2.webp"
                                />
                                </div>
                            <div class="name">
                                <p>装飾品の名前</p>
                            </div>
                        </div>
                        <div class="explanation">
                            <p>装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ装飾品の説明メッセージ</p>
                        </div>
                        <div class="picture-holder">
                            <img
                              alt="decoration"
                              class="deco-img"
                              src="/assets/images/deco-images/deco-tmp.png"
                            />
                        </div>
                        <div class="place">
                            <p>【展示場所】<br />場所説明</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <FloatingButton /> -->
        <div class="prepare">
            <h1>準備中</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  > p {
    margin: 1rem 12vw;
  }
}
p {
  line-height: 2.4rem;
}

.big-box{
    background-color: #eee;
    padding: 1% 4%;
    opacity: 70%;
    border-radius: 2rem;
    margin: 3rem 5vw;
}

.deco-about{
    margin: 2rem 10vw;
    font-size: 27px;

    @include md{
        font-size: 20px;
    }
}
.deco-headline{
    margin: 2rem 4vw;
    font-size: 25px;

    @include md{
        font-size: 20px;
    }
}
.child-title{
    display: flex;
    position: relative;
}

.patterns{
    position: relative;
}

.deco-pattern1{
    position: absolute;
    top: 60px;
    left: 0;
}

.deco-pattern2{
    position: absolute;
    top: 80px;
    left: 45px;
}

.name{
    margin: 5rem 8vw 2rem;
    font-size: 30px;
    z-index: 1;

    @include md{
        font-size: 22px;
    }
}
.explanation{
    font-size: 27px;

    @include md{
        font-size: 16px;
    }
}
.picture-holder{
    display: flex;
    align-items: center;

    img {
        margin: 0 auto;
        width: 100%;
        max-width: 450px;
    }
      
    @include md {
        flex-direction: column;
        width: 100%;
        top: 0;
        img{
          max-width: 350px;
        }
    }
}

.place{
    font-size: 27px;

    @include md{
        font-size: 18px;
    }
}
.prepare{
  display: flex;
  justify-content: center;
  margin-top: 8vw;
}
</style>