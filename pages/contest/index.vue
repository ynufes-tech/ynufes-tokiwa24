<script setup lang="ts">
useHead({
  title: 'Contest | 24常盤祭の企画コンテスト',
  meta: [{ name: 'description', content: '24常盤祭の企画コンテスト' }],
})

// const Food1st = 900
// const Food2nd = 900
// const Food3rd = 900
// const Food1stStar = 1
// const Food2ndStar = 1
// const Food3rdStar = 1
//
// const Exhibit1st = 900
// const Exhibit2nd = 900
// const Exhibit3rd = 900
// const Exhibit1stStar = 1
// const Exhibit2ndStar = 1
// const Exhibit3rdStar = 1
//
// const Performance1st = 900
// const Performance2nd = 900
// const Performance3rd = 900
// const Performance1stStar = 1
// const Performance2ndStar = 1
// const Performance3rdStar = 1
</script>

<template>
  <div class="page-root">
    <div class="title">
      <div class="title-name">
        <h1>企画コンテスト</h1>
      </div>
    </div>
    <div class="program-introduction">
      <div class="program-about">
        <h2>【企画紹介】</h2>
        <p>
          全企画が1位を目指して盛り上がる、
          手に汗握る企画コンテストを今年も開催します！
          今回のテーマは「企画審査委員会」ということで、
          皆さんには審査委員になったつもりで ＜食べたご飯＞ や
          ＜鑑賞した展示＞、＜楽しんだパフォーマンス＞を5つ星評価をしてもらいます。
          参加してくれた人には豪華協賛品も！ どんどん投票してください
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
            <p>
              各団体が工夫を凝らした絶品料理がひしめき合う！
              最もみんなの胃袋を掴む企画は一体どれだ…！？
            </p>
          </div>
          <div class="table">
            <h2>～ 展示・販売・体験部門 ～</h2>
          </div>
          <div class="content">
            <p>
              個性豊かで新しい発見のあふれる企画がたくさん！
              みんなを一番楽しませる企画はどれになる～！？
            </p>
          </div>
          <div class="table">
            <h2>～ パフォーマンス部門 ～</h2>
          </div>
          <div class="content">
            <p>
              見たものを圧倒するパフォーマンスの数々に感動せずには居られない！
              心躍る企画たちの頂点に輝くのは…？
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--    <div class="result">-->
    <!--      <div class="result-announcement-wrapper">-->
    <!--        <div class="result-announcement">-->
    <!--          <p>結果発表</p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="results-table">-->
    <!--        <div class="group-box">-->
    <!--          <div class="child-title-wrapper">-->
    <!--            <div class="child-title">-->
    <!--              <p>飲食部門</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="crown">-->
    <!--            <img-->
    <!--              alt="王冠"-->
    <!--              class="crown-image"-->
    <!--              src="~/assets/images/crown1.webp"-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="ranking-wrapper">-->
    <!--            <NuxtLink class="No2" :to="'/events/' + Food2nd">-->
    <!--              <div class="img-holder">-->
    <!--                <img-->
    <!--                  alt="飲食部門第2位"-->
    <!--                  class="rank-image"-->
    <!--                  :src="-->
    <!--                    'https://storage.googleapis.com/tokiwa24-assets/icos/' +-->
    <!--                    Food2nd +-->
    <!--                    '.webp'-->
    <!--                  "-->
    <!--                />-->
    <!--              </div>-->
    <!--              <div class="rank-box">-->
    <!--                <div class="rank">-->
    <!--                  <p>第二位</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="voting-2">-->
    <!--                <p>星{{ Food2ndStar }}</p>-->
    <!--              </div>-->
    <!--            </NuxtLink>-->
    <!--            <NuxtLink class="No1" :to="'/events/' + Food1st">-->
    <!--              <div class="img-holder">-->
    <!--                <img-->
    <!--                  alt="飲食部門第1位"-->
    <!--                  class="rank-image"-->
    <!--                  :src="-->
    <!--                    'https://storage.googleapis.com/tokiwa24-assets/icos/' +-->
    <!--                    Food1st +-->
    <!--                    '.webp'-->
    <!--                  "-->
    <!--                />-->
    <!--              </div>-->
    <!--              <div class="rank-box">-->
    <!--                <div class="rank">-->
    <!--                  <p>第一位</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="voting-1">-->
    <!--                <p>星{{ Food1stStar }}</p>-->
    <!--              </div>-->
    <!--            </NuxtLink>-->
    <!--            <NuxtLink class="No3" :to="'/events/' + Food3rd">-->
    <!--              <div class="img-holder">-->
    <!--                <img-->
    <!--                  alt="飲食部門第3位"-->
    <!--                  class="rank-image"-->
    <!--                  :src="-->
    <!--                    'https://storage.googleapis.com/tokiwa24-assets/icos/' +-->
    <!--                    Food3rd +-->
    <!--                    '.webp'-->
    <!--                  "-->
    <!--                />-->
    <!--              </div>-->
    <!--              <div class="rank-box">-->
    <!--                <div class="rank">-->
    <!--                  <p>第三位</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="voting-3">-->
    <!--                <p>星{{ Food3rdStar }}</p>-->
    <!--              </div>-->
    <!--            </NuxtLink>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="group-box">-->
    <!--          <div class="child-title-wrapper">-->
    <!--            <div class="child-title">-->
    <!--              <p>展示・販売・体験部門</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="crown">-->
    <!--            <img-->
    <!--              alt="王冠"-->
    <!--              class="crown-image"-->
    <!--              src="~/assets/images/crown1.webp"-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="ranking-wrapper">-->
    <!--            <NuxtLink class="No2" :to="'/events/' + Exhibit2nd">-->
    <!--              <div class="img-holder">-->
    <!--                <img-->
    <!--                  alt="展示・販売・体験部門第2位"-->
    <!--                  class="rank-image"-->
    <!--                  :src="-->
    <!--                    'https://storage.googleapis.com/tokiwa24-assets/icos/' +-->
    <!--                    Exhibit2nd +-->
    <!--                    '.webp'-->
    <!--                  "-->
    <!--                />-->
    <!--              </div>-->
    <!--              <div class="rank-box">-->
    <!--                <div class="rank">-->
    <!--                  <p>第二位</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="voting-2">-->
    <!--                <p>星{{ Exhibit2ndStar }}</p>-->
    <!--              </div>-->
    <!--            </NuxtLink>-->
    <!--            <NuxtLink class="No1" :to="'/events/' + Exhibit1st">-->
    <!--              <div class="img-holder">-->
    <!--                <img-->
    <!--                  alt="展示・販売・体験部門第1位"-->
    <!--                  class="rank-image"-->
    <!--                  :src="-->
    <!--                    'https://storage.googleapis.com/tokiwa24-assets/icos/' +-->
    <!--                    Exhibit1st +-->
    <!--                    '.webp'-->
    <!--                  "-->
    <!--                />-->
    <!--              </div>-->
    <!--              <div class="rank-box">-->
    <!--                <div class="rank">-->
    <!--                  <p>第一位</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="voting-1">-->
    <!--                <p>星{{ Exhibit1stStar }}</p>-->
    <!--              </div>-->
    <!--            </NuxtLink>-->
    <!--            <NuxtLink class="No3" :to="'/events/' + Exhibit3rd">-->
    <!--              <div class="img-holder">-->
    <!--                <img-->
    <!--                  alt="展示・販売・体験部門第3位"-->
    <!--                  class="rank-image"-->
    <!--                  :src="-->
    <!--                    'https://storage.googleapis.com/tokiwa24-assets/icos/' +-->
    <!--                    Exhibit3rd +-->
    <!--                    '.webp'-->
    <!--                  "-->
    <!--                />-->
    <!--              </div>-->
    <!--              <div class="rank-box">-->
    <!--                <div class="rank">-->
    <!--                  <p>第三位</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="voting-3">-->
    <!--                <p>星{{ Exhibit3rdStar }}</p>-->
    <!--              </div>-->
    <!--            </NuxtLink>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="group-box">-->
    <!--          <div class="child-title-wrapper">-->
    <!--            <div class="child-title">-->
    <!--              <p>パフォーマンス部門</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="crown">-->
    <!--            <img-->
    <!--              alt="王冠"-->
    <!--              class="crown-image"-->
    <!--              src="~/assets/images/crown1.webp"-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="ranking-wrapper">-->
    <!--            <NuxtLink class="No2" :to="'/events/' + Performance2nd">-->
    <!--              <div class="img-holder">-->
    <!--                <img-->
    <!--                  alt="パフォーマンス部門第2位"-->
    <!--                  class="rank-image"-->
    <!--                  :src="-->
    <!--                    'https://storage.googleapis.com/tokiwa24-assets/icos/' +-->
    <!--                    Performance2nd +-->
    <!--                    '.webp'-->
    <!--                  "-->
    <!--                />-->
    <!--              </div>-->
    <!--              <div class="rank-box">-->
    <!--                <div class="rank">-->
    <!--                  <p>第二位</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="voting-2">-->
    <!--                <p>星{{ Performance2ndStar }}</p>-->
    <!--              </div>-->
    <!--            </NuxtLink>-->
    <!--            <NuxtLink class="No1" :to="'/events/' + Performance1st">-->
    <!--              <div class="img-holder">-->
    <!--                <img-->
    <!--                  alt="パフォーマンス部門第1位"-->
    <!--                  class="rank-image"-->
    <!--                  :src="-->
    <!--                    'https://storage.googleapis.com/tokiwa24-assets/icos/' +-->
    <!--                    Performance1st +-->
    <!--                    '.webp'-->
    <!--                  "-->
    <!--                />-->
    <!--              </div>-->
    <!--              <div class="rank-box">-->
    <!--                <div class="rank">-->
    <!--                  <p>第一位</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="voting-1">-->
    <!--                <p>星{{ Performance1stStar }}</p>-->
    <!--              </div>-->
    <!--            </NuxtLink>-->
    <!--            <NuxtLink class="No3" :to="'/events/' + Performance3rd">-->
    <!--              <div class="img-holder">-->
    <!--                <img-->
    <!--                  alt="パフォーマンス部門第3位"-->
    <!--                  class="rank-image"-->
    <!--                  :src="-->
    <!--                    'https://storage.googleapis.com/tokiwa24-assets/icos/' +-->
    <!--                    Performance3rd +-->
    <!--                    '.webp'-->
    <!--                  "-->
    <!--                />-->
    <!--              </div>-->
    <!--              <div class="rank-box">-->
    <!--                <div class="rank">-->
    <!--                  <p>第三位</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--              <div class="voting-3">-->
    <!--                <p>星{{ Performance3rdStar }}</p>-->
    <!--              </div>-->
    <!--            </NuxtLink>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <div class="pre-message">
      <h2>常盤祭当日の更新をお待ちください</h2>
    </div>
    <!--    </div>-->
    <FloatingButton />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.page-root {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.title-name {
  background-color: #eee;
  display: flex;
  justify-content: center;
  margin: 10rem 0 1rem 0;
  font-size: 30px;
  opacity: 80%;

  h1 {
    font-weight: lighter;
  }

  @include md {
    margin: 12vh 0 1rem 0;
    font-size: 16px;
  }
}

.program-about {
  font-size: 28px;
  text-align: center;
  margin: 0 3% 0 3%;

  h2 {
    font-weight: lighter;
  }

  @include md {
    font-size: 17px;
    h2 {
      font-weight: lighter;
      font-size: 18px;
    }
  }
}

.how-to-image {
  display: flex;
  justify-content: center;
  margin: 2rem 0 4rem;

  img {
    margin: 0 auto;
    width: 100vw;
    max-width: 450px;
    @include md {
      width: 90vw;
    }
  }

  @include md {
    margin: 4vh 0 5vh;
  }
}

.department-introduction {
  font-size: 28px;
}

.intro-title {
  display: flex;
  justify-content: center;
  margin-bottom: 3vh;

  h2 {
    font-weight: lighter;
    margin-bottom: 0;
  }

  @include md {
    h2 {
      font-weight: lighter;
      font-size: 18px;
    }
  }
}

.intro {
  max-width: 80vw;
  margin: 0 auto;

  @include md {
    font-size: 17px;
    margin-bottom: 5vh;

    h2 {
      font-weight: lighter;
      font-size: 18px;
    }
  }
}

.table {
  display: flex;
  justify-content: center;

  h2 {
    font-size: 32px;
    font-weight: lighter;
    margin-bottom: 0;

    @include md {
      font-size: 18px;
    }
  }
}

.result-announcement-wrapper {
  display: flex;
  justify-content: center;
  margin: 6rem 0 3rem 0;

  @include md {
    margin: 3vh 0 0 0;
  }
}
.result-announcement {
  border-radius: 1em;
  width: 25vw;
  text-align: center;
  color: #eee;
  background-color: #000000;

  @include md {
    height: 3.5em;
    font-size: 18px;
    width: 50vw;
  }
}

.child-title-wrapper {
  display: flex;
  justify-content: center;
  margin: 5rem 0 3rem 0;

  @include md {
    margin: 7vh 0 3vh 0;
  }
}
.child-title {
  border-radius: 1em;
  width: 30vw;
  text-align: center;
  text-decoration: none;
  color: #eee;
  background-color: #000000;
  opacity: 80%;

  @include sm {
    font-size: 16px;
    width: 58vw;
  }

  @include md {
    font-size: 17px;
    width: 60vw;
    height: 3.5em;
  }
}

.crown {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  @include md {
    margin-bottom: 2vh;
  }
}

.crown-image {
  @include md {
    width: 20vw;
  }
}

.img-holder {
  @include md {
    display: flex;
    justify-content: center;
  }
}

.rank-image {
  width: 300px;
  height: 300px;
  border-radius: 2rem;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 800px) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 530px) {
    width: 140px;
    height: 140px;
  }
  @include sm {
    width: 100px;
    height: 100px;
  }
}

.ranking-wrapper {
  flex-direction: row;
  display: flex;
  justify-content: space-around;

  @include md {
    display: flex;
    justify-items: center;
  }
}

.rank-box {
  display: flex;
  justify-content: center;
}

.rank {
  border-radius: 2em;
  width: fit-content;
  padding: 0 1em;
  height: 2em;
  background-color: #000000;
  opacity: 80%;
  text-align: center;
  color: #eee;

  p {
    margin: 0.5rem 0 0 0;
  }

  @include md {
    font-size: 16px;
    height: 2.5em;
    width: 15vw;
  }
  @include sm {
    font-size: 14px;
  }
}

.No1 {
  flex-direction: column;
  display: flex;
  justify-items: center;
  text-decoration: none;

  @include md {
    margin-top: 0;
  }
}

.No2 {
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  text-decoration: none;

  @include md {
    margin-top: 5vh;
  }
}

.No3 {
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  text-decoration: none;

  @include md {
    margin-top: 5vh;
  }
}

p {
  text-align: center;
}

h2 {
  font-size: 28px;
}
.results-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  .group-box {
    width: 100vw;
    max-width: 1500px;
  }
}
.voting-1,
.voting-2,
.voting-3 {
  color: black;
}
.pre-message {
  display: flex;
  justify-content: center;
  padding-bottom: 2em;
}
</style>
