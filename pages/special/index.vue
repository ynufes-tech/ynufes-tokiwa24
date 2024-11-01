<script setup lang="ts">
useHead({
  title: 'ゲスト企画 | 24常盤祭公式HP~夢灯~',
  meta: [
    { name: 'description', content: '24常盤祭の特別ゲスト企画をご紹介します' },
  ],
})
</script>

<template>
  <div class="page-root">
    <div class="page-title-frame">
      <h1>山崎怜奈のトークセッション in YNU 2024</h1>
    </div>
    <div class="img-frame">
      <img
        alt="logo"
        class="img"
        src="~/assets/images/tokiwa_guest_logo.webp"
      />
      <img alt="logo" class="img" src="~/assets/images/tokiwa_gest_img2.webp" />
    </div>
    <div class="dark-frame">
      <h2>企画説明</h2>
      <p>
        2024年常盤祭に人気タレントの山崎怜奈さんが登壇します!!<br />

        様々なコーナーで皆さまと楽しい時間を作っていきます！<br />
        サイン入り色紙が貰えるチャンスも!?<br />

        チケットの購入はお早めに！
      </p>
    </div>
    <div class="dark-frame">
      <h2>日時</h2>
      <p id="center">11月2日（土） 12：00～13：00</p>
      <p id="right">（開場&emsp;11:45～）</p>
      <h2>会場</h2>
      <p id="center">横浜国立大学経営学部棟2号館109教室特設ステージ</p>
      <h2>チケット代金</h2>
      <p id="center">
        S席5000円<br />
        A席4200円<br />
        B席2500円
      </p>
      <div style="display: flex; justify-content: center">
        <a
          href="https://eplus.jp/sf/detail/4195370001-P0030001"
          target="_blank"
          rel="noopener noreferrer"
          >チケット購入ページはこちら</a
        >
      </div>
    </div>
    <div class="dark-frame">
      <h2>注意事項</h2>
      <p>
        1.出演者は予告なしに変更になる場合がございます。<br />

        2.企画内容について、予告なく変更・中止になる場合がございます。ご了承ください。<br />

        3.中止の場合、チケットに関しまして返金対応をさせていただきます。<br />

        4.参加の際、持ち物検査等安全に関わるお願いに従っていただけない場合、参加をお断りする場合がございます。お願いの内容につきましてはチケット購入ページを御覧ください。<br />

        5.お問い合わせにつきましては当該SNSでは対応いたしかねます。<br />
        ynu24kikaku@gmail.comまでお問い合わせお願い致します。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
.page-root {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.page-title-frame {
  height: 200px;
  background: rgba(0, 0, 0, 0.4);
  margin: 7rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @include md {
    margin: 5.3rem 0 1rem;
    height: 110px;
  }
}
h1 {
  color: #ddd;
  font-size: 50px;
  @include md {
    font-size: 15px;
  }
}
h2 {
  color: #ddd;
  text-align: center;
  margin: 4rem auto 1rem;
}
p {
  color: #ddd;
}
.img-frame {
  display: flex;
  margin: 5rem auto;
  @include md {
    margin: 1.2rem auto;
  }
}
.img {
  width: 300px;
  margin: 1rem;
  @include md {
    width: 200px;
  }
  @include sm {
    width: 150px;
  }
  object-fit: contain;
}
.dark-frame {
  margin: 2rem auto;
  padding: 0rem 10rem 1rem;
  width: 50vw;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  overflow-wrap: break-word;
  @include md {
    width: 75vw;
    padding: 0rem 2rem 1rem;
  }
  @include sm {
    width: 80vw;
    padding: 0rem 1rem 1rem;
  }
}
#center {
  text-align: center;
}
#right {
  text-align: right;
  margin-right: 8vw;
}
</style>
