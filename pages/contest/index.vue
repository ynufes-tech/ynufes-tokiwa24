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
        <div class="contest-page">
        <div class="title">
            <div class="title-name">
                <h1>企画コンテスト</h1>
            </div>
        </div>  
        <div class="program-introduction">    
            <div class="program-about">
                <h2>【企画紹介】</h2>
                <p>全企画が1位を目指して盛り上がる、
                   手に汗握る企画コンテストを今年も開催します！
                   今回のテーマは「企画審査委員会」ということで、
                   皆さんには審査委員になったつもりで
                   ＜食べたご飯＞ や ＜鑑賞した展示＞、＜楽しんだパフォーマンス＞を5つ星評価をしてもらいます。
                   参加してくれた人には豪華協賛品も！
                   どんどん投票してください
                </p>
            </div>
            <div class="how-to">
                <div class="how-to-image">
                    <img
                        alt="how-to"
                        class="how-to-image"
                        src="~/assets/images/contest-howto.webp"
                    />                    
                </div>
            </div>
            <div class="department-introduction">
                <div class="intro-title">
                    <h2>【部門紹介】</h2>
                </div>
                <div class="intro">
                <div class="table">
                    <h2>～ 飲食部門 ～</h2>
                </div>
                <div class="content">
                    <p>各団体が工夫を凝らした絶品料理がひしめき合う！ 最もみんなの胃袋を掴む企画は一体どれだ…！？</p>
                </div>
                <div class="table">
                    <h2>～ 展示・体験・物販部門 ～</h2>
                </div>
                <div class="content">
                    <p>個性豊かで新しい発見のあふれる企画がたくさん！ みんなを一番楽しませる企画はどれになる～！？</p>
                </div>
                <div class="table">
                    <h2>～ パフォーマンス部門 ～</h2>
                </div>
                <div class="content">
                    <p>見たものを圧倒するパフォーマンスの数々に感動せずには居られない！ 心躍る企画たちの頂点に輝くのは…？</p>
                </div>
                </div>
            </div>
        </div>

        <div class="result">
            <div class="result-announcement-wrapper">
                <div class="result-announcement">
                    <p>結果発表</p>
                </div>
            </div>
            <div class="results-table">
                <div class="food&#38;drink">
                    <div class="child-title-wrapper">
                        <div class="child-title">
                            <p>飲食部門</p>
                        </div>
                    </div>
                    <div class="crown">
                        <img
                            alt="王冠"
                            class="crown-image"
                            src="~/assets/images/crown1.webp"
                        >
                    </div>
                    <div class="ranking-wrapper">
                        <div class="No2">
                            <div class="img-holder">
                            <img
                                alt="飲食部門第2位"
                                class="rank-image"
                                src="~/assets/images/noimage.webp"
                            >
                            </div>
                            <div class="rank-box">
                                <div class="rank">
                                    <p>第二位</p>
                                </div>
                            </div>
                            <div class="voting-2">
                                <p>星○○</p>
                            </div>
                        </div>
                        <div class="No1">
                            <div class="img-holder">
                            <img
                                alt="飲食部門第1位"
                                class="rank-image"
                                src="~/assets/images/noimage.webp"
                            >
                            </div>
                            <div class="rank-box">
                                <div class="rank">
                                    <p> 第一位</p>
                                </div>
                            </div>
                            <div class="voting-1">
                                <p>星○○</p>
                            </div>
                        </div>
                        <div class="No3">
                            <div class="img-holder">
                            <img
                                alt="飲食部門第3位"
                                class="rank-image"
                                src="~/assets/images/noimage.webp"
                            >
                            </div>
                            <div class="rank-box">
                                <div class="rank">
                                    <p>第三位</p>
                                </div>
                            </div>
                            <div class="voting-3">
                                <p>星○○</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="display&#38;goods">
                    <div class="child-title-wrapper">
                        <div class="child-title">
                            <p>展示・体験・物販部門</p>
                        </div>
                    </div>
                    <div class="crown">
                        <img
                            alt="王冠"
                            class="crown-image"
                            src="~/assets/images/crown1.webp"
                        >
                    </div>
                    <div class="ranking-wrapper">
                        <div class="No2">
                            <div class="img-holder">
                            <img
                                alt="展示・体験・物販部門第2位"
                                class="rank-image"
                                src="~/assets/images/noimage.webp"
                            >
                            </div>
                            <div class="rank-box">
                                <div class="rank">
                                    <p>第二位</p>
                                </div>
                            </div>
                            <div class="voting-2">
                                <p>星○○</p>
                            </div>
                        </div>
                        <div class="No1">
                            <div class="img-holder">
                            <img
                                alt="展示・体験・物販部門第1位"
                                class="rank-image"
                                src="~/assets/images/noimage.webp"
                            >
                            </div>
                            <div class="rank-box">
                                <div class="rank">
                                    <p>第一位</p>
                                </div>
                            </div>
                            <div class="voting-1">
                                <p>星○○</p>
                            </div>
                        </div>
                        <div class="No3">
                            <div class="img-holder">
                            <img
                                alt="展示・販売・体験部門第3位"
                                class="rank-image"
                                src="~/assets/images/noimage.webp"
                            >
                            </div>
                            <div class="rank-box">
                                <div class="rank">
                                    <p>第三位</p>
                                </div>
                            </div>
                            <div class="voting-3">
                                <p>星○○</p>
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
                    <div class="crown">
                        <img
                            alt="王冠"
                            class="crown-image"
                            src="~/assets/images/crown1.webp"
                        >
                    </div>
                    <div class="ranking-wrapper">
                        <div class="No2">
                            <div class="img-holder">
                            <img
                                alt="パフォーマンス部門第2位"
                                class="rank-image"
                                src="~/assets/images/noimage.webp"
                            >
                            </div>
                            <div class="rank-box">
                                <div class="rank">
                                    <p>第二位</p>
                                </div>
                            </div>
                            <div class="voting-2">
                                <p>星○○</p>
                            </div>
                        </div>
                        <div class="No1">
                            <div class="img-holder">
                            <img
                                alt="パフォーマンス部門第1位"
                                class="rank-image"
                                src="~/assets/images/noimage.webp"
                            >
                            </div>
                            <div class="rank-box">
                                <div class="rank">
                                    <p>第一位</p>
                                </div>
                            </div>
                            <div class="voting-1">
                                <p>星○○</p>
                            </div>
                        </div>
                        <div class="No3">
                            <div class="img-holder">
                            <img
                                alt="パフォーマンス部門第3位"
                                class="rank-image"
                                src="~/assets/images/noimage.webp"
                            >
                            </div>
                            <div class="rank-box">
                                <div class="rank">
                                    <p>第三位</p>
                                </div>
                            </div>
                            <div class="voting-3">
                                <p>星○○</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <FloatingButton />
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.page-root{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}

.title-name{
    background-color: #eee;
    display: flex;
    justify-content: center;
    margin: 10rem 0 1rem 0;
    font-size: 30px;
    opacity: 60%;

    h1{
        font-weight: lighter;
    }

    @include md{
        margin: 12vh 0 1rem 0;
        font-size: 16px;
    }
}

.program-about{
    font-size: 28px;
    text-align: center;
    margin: 0 3% 0 3%;
    
    h2{
        font-weight: lighter;
    }
    
    @include md{
        font-size: 12px;
        h2{
        font-weight: lighter;
        font-size: 12px;
        }
    }
}

.how-to-image{
    display: flex;
    justify-content: center; 
    margin: 2rem 0 4rem;
    
    img {
        margin: 0 auto;
        width: 100vw;
        max-width: 450px;
        @include md{
            width: 90vw;
        }
    }
    
    @include md{
        margin: 4vh 0 5vh;
    }
}

.department-introduction{
    font-size: 28px;
}

.intro-title{
    display: flex;
    justify-content: center;
    margin-bottom: 3vh;

    h2{
        font-weight: lighter;
        margin-bottom: 0;
    }
    
    @include md{
        h2{
        font-weight: lighter;
        font-size: 12px;
        }
    }
}

.intro{
    max-width: 80vw;
    margin: 0 auto;
    
    @include md{
        font-size: 12px;
        margin-bottom: 5vh;

        h2{
        font-weight: lighter;
        font-size: 12px;
        }
    }
}

.table{
    display: flex;
    justify-content: center;
    
    h2{
        font-size: 32px;
        font-weight: lighter;
        margin-bottom: 0;

        @include md{
            font-size: 15px;
        }
    }
}

.result-announcement-wrapper{
  display: flex;
  justify-content: center;
  margin: 6rem 0 3rem 0;
  
  @include md{
    margin: 3vh 0 0 0;
  }
}
.result-announcement{
  border-radius: 1em;
  width: 25vw;
  text-align: center;
  color: #eee;
  background-color: #000000;
  @include md {
    height: 3.5em;
    font-size: 13px;
    width: 50vw;
  }
}

.child-title-wrapper{
    display: flex;
    justify-content: center;
    margin:5rem 0 3rem 0;

    @include md{
        margin: 3vh 0 3vh 0;
    }
}
.child-title{
  border-radius: 1em;
  width: 30vw;
  text-align: center;
  text-decoration: none;
  color: #eee;
  background-color: #000000;
  opacity: 50%;

  @include sm{
    font-size: 12px;
    width: 50vw;
  }

  @include md {
    font-size: 13px;
    width: 50vw;
    height: 3.5em;
  }
}

.crown {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;

    @include md{
        margin-bottom: 2vh;
    }
}

.crown-image{
    @include md{
        width: 20vw;
    }
}

.img-holder{
    @include md{
    display: flex;
    justify-content: center;
    }
}


.rank-image{
    width: 300px;
    height: 300px;
    border-radius: 2rem;
    margin-bottom: 10px;

    @include lg{
        width: 250px;
        height: 250px;
    }
}

.ranking-wrapper{
    flex-direction: row;
    display: flex;
    justify-content: space-around;

    @include md {
        display: flex;
        flex-direction: column;
        justify-items: center;
    }
}

.rank-box{
    display: flex;
    justify-content: center;
}

.rank{
  border-radius: 2em;
  width: 8vw;
  height: 2em;
  background-color: #000000;
  opacity: 50%;

  @include md {
    height: 2.5em;
    width: 30vw;
  }

  text-align: center;
  color: #eee;

  p{
    margin: 0.5rem 0 0 0;
  }
}


.No1{
    flex-direction: column;
    display: flex;
    justify-items: center;

    @include md{
        margin-top: 0;
    }
}

.No2{
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    
    @include md{
        margin-top: 5vh;
        order: 2;
    }
}

.No3{
    display: flex;
    flex-direction: column;
    margin-top: 20vh;

    @include md{
        margin-top: 5vh;
        order: 3;
    }
}

p {
    text-align: center;
}

h2{
    font-size: 28px;
}

</style>