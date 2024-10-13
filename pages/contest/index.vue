<script setup lang="ts">
useHead({
  title: "Contest | 24常盤祭の企画コンテスト",
  meta: [
    { name: "description", content: "24常盤祭の企画コンテスト" },
  ],
});
</script>

<template>
    <div class="page-root">
        <div class="title">
            <div class="title-name">
                <p>企画コンテスト</p>
            </div>
        </div>  
        <div class="program-introduction">    
            <div class="program-about">
                <p>【企画紹介】<br />
                   全企画が1位を目指して盛り上がる、
                   手に汗握る企画コンテストを今年も開催します！
                   今回の<br />テーマは「企画審査委員会」ということで、
                   皆さんには審査委員になったつもりで
                   ＜食べたご<br />飯＞ や ＜鑑賞した展示＞、＜楽しんだパフォーマンス＞を5つ星評価をしてもらいます。
                   参<br />加してくれた人には豪華協賛品も！
                   どんどん投票してください
                </p>
            </div>
            <div class="how-to">
                <div class="how-to-image">
                    <img
                        alt="how-to"
                        class="how-to-image"
                        src="/assets/images/noimage.webp"
                    />                    
                </div>
            </div>
            <div class="department-introduction">
                <p>【部門紹介】<br />
                〇飲食部門 各団体が工夫を凝らした絶品料理がひしめき合う！ 最もみんなの胃袋を掴む企<br />画は一体どれだ…！？<br />
                〇展示・体験・物販部門 個性豊かで新しい発見のあふれる企画がたくさん！ みんなを一番<br />楽しませる企画はどれになる～！？<br />
                〇パフォーマンス部門 見たものを圧倒するパフォーマンスの数々に感動せずには居られな<br />い！ 心躍る企画たちの頂点に輝くのは…？</p>
            </div>
        </div>

        <div class="result">
            <div class="result-announcement-wrapper">
                <div class="result-announcement">
                    <p>結果発表</p>
                </div>
            </div>
            <div class="results-table">
                <div class="food&drink">
                    <div class="child-title-wrapper">
                        <div class="child-title">
                            <p>飲食部門</p>
                        </div>
                    </div>
                    <div class="ranking-wrapper">
                        <div class="No1">
                            <div class="crown">
                                <img
                                    alt="王冠"
                                    class="飲食部門"
                                    src="/assets/images/王冠 1.webp"
                                >
                            </div>
                            <div class="No1-picture">
                                <img
                                    alt="飲食部門第1位"
                                    class="rank-image"
                                    src="/assets/images/noimage.webp"
                                >
                            </div>
                            <div class="ranking">
                                <p> 第一位</p>
                            </div>
                            <div class="voting-1">
                                <p>○○票</p>
                            </div>
                        </div>
                        <div class="No2">
                            <img
                                alt="飲食部門第2位"
                                class="rank-image"
                                src="/assets/images/noimage.webp"
                            >
                            <div class="ranking">
                                <p>第二位</p>
                            </div>
                            <div class="voting-2">
                                <p>○○票</p>
                            </div>
                        </div>
                        <div class="No3">
                            <img
                                alt="飲食部門第3位"
                                class="rank-image"
                                src="/assets/images/noimage.webp"
                            >
                            <div class="ranking">
                                <p>第三位</p>
                            </div>
                            <div class="voting-3">
                                <p>○○票</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="display&goods">
                    <div class="child-title-wrapper">
                        <div class="child-title">
                            <p>展示・体験・物販部門</p>
                        </div>
                    </div>
                    <div class="ranking-wrapper">
                        <div class="No1">
                            <div class="crown">
                                <img
                                    alt="王冠"
                                    class="展示・体験・物販部門"
                                    src="/assets/images/王冠 1.webp"
                            >
                            <img
                                alt="展示・体験・物販部門第1位"
                                class="rank-image"
                                src="/assets/images/noimage.webp"
                            >
                            <div class="ranking">
                                <p>第一位</p>
                            </div>
                            <div class="voting-1">
                                <p>○○票</p>
                            </div>
                        </div>
                        <div class="No2">
                            <img
                                alt="展示・体験・物販部門第2位"
                                class="rank-image"
                                src="/assets/images/noimage.webp"
                            >
                            <div class="ranking">
                                <p>第二位</p>
                            </div>
                            <div class="voting-2">
                                <p>○○票</p>
                            </div>
                        </div>
                        <div class="No3">
                            <img
                                alt="展示・体験・物販部門第3位"
                                class="rank-image"
                                src="/assets/images/noimage.webp"
                            >
                            <div class="ranking">
                                <p>第三位</p>
                            </div>
                            <div class="voting-3">
                                <p>○○票</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="performance">
                    <div class="child-title-wrapper">
                        <div class="child-title">
                            <p>パフォーマンス部門</p>
                        </div>
                    </div>
                    <div class="ranking-wrapper">
                        <div class="No1">
                            <div class="crown">
                                <img
                                    alt="王冠"
                                    class="パフォーマンス部門"
                                    src="/assets/images/王冠 1.webp"
                                >
                            </div>
                            <img
                                alt="パフォーマンス部門第1位"
                                class="rank-image"
                                src="/assets/images/noimage.webp"
                            >
                            <div class="ranking">
                                <p>第一位</p>
                            </div>
                            <div class="voting-1">
                                <p>○○票</p>
                            </div>
                        </div>
                        <div class="No2">
                            <img
                                alt="パフォーマンス部門第2位"
                                class="rank-image"
                                src="/assets/images/noimage.webp"
                            >
                            <div class="ranking">
                                <p>第二位</p>
                            </div>
                            <div class="voting-2">
                                <p>○○票</p>
                            </div>
                        </div>
                        <div class="No3">
                            <img
                                alt="パフォーマンス部門第3位"
                                class="rank-image"
                                src="/assets/images/noimage.webp"
                            >
                            <div class="ranking">
                                <p>第三位</p>
                            </div>
                            <div class="voting-3">
                                <p>○○票</p>
                            </div>
                        </div>
                    </div>
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
    flex-direction: column;
}

.title-name{
    background-color: #eee;
    display: flex;
    justify-content: center;
    margin: 10rem 0 0 0;
    font-size: 64px;
    opacity: 60%;
}

.program-about{
    font-size: 28px;
    text-align: center;
    margin: 0 3% 0 3%;
}

.how-to-image{
    display: flex;
    justify-content: center; 
    margin: 2rem 0 4rem;
    
    img {
        margin: 0 auto;
        width: 100%;
        max-width: 450px;
    }   
}

.department-introduction{
    font-size: 28px;
    text-align: center;
}

.result-announcement-wrapper{
  display: flex;
  justify-content: center;
  margin: 6rem 0 3rem 0;
}
.result-announcement{
  border-radius: 1em;
  width: 25vw;
  text-align: center;
  color: #eee;
  background-color: #000000;
  @include sm {
    height: 3.5em;
  }
  h2{
    margin: 1em 2.5em;
    @include sm {
      font-size: 16px;
    }
  }
}

.child-title-wrapper{
    display: flex;
    justify-content: center;
    margin:5rem 0 3rem 0;
}
.child-title{
  border-radius: 1em;
  width: 20vw;
  text-align: center;
  text-decoration: none;
  color: #eee;
  background-color: #000000;
  opacity: 50%;

  @include sm {
    height: 3.5em;
  }
  h2{
    margin: 1em 2.5em;
    @include sm {
      font-size: 16px;
    }
  }
}


.crown {
    width: 60px;
    height: auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
}

.rank-image{
    width: 300px;
    height: 300px;
    border-radius: 2rem;
    margin-bottom: 10px;
}

.ranking{
  border-radius: 2em;
  width: 8vw;
  height: 3rem;
  text-align: center;
  color: #eee;
  background-color: #000000;
  opacity: 50%;

  @include sm {
    height: 3.5em;
  }
  h2{
    margin: 1em 2.5em;
    @include sm {
      font-size: 16px;
    }
  }
}

.voting {
    font-size: 1rem;
}

.No1{
    flex-direction: column;
    display: flex;
    justify-items: center;
}

.No2{
    display: flex;
    flex-direction: column;
}

.No3{
    display: flex;
    flex-direction: column;
}

</style>