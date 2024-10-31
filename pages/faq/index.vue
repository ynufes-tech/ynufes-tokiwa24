<script setup lang="ts">
useHead({
  title: 'Faq | 24常盤祭公式HP~夢灯~',
  meta: [
    {
      name: 'description',
      content: '大学祭に関するよくある質問を掲載しています',
    },
  ],
})
</script>

<template>
  <div class="page-root">
    <PageTitle :title="'FAQ'" :sub-title="'よくある質問'" />
     <div class="page-wrapper">
      <div class="faq-box">
        <p class="q-num">Q1</p>
        <div class="p-box">
          <p>落とし物や迷子の相談は？</p>
          <p>
            お近くのＳＴＡＦＦジャンパーを着た大学祭実⾏委員にお声がけいただくか、本部(経営学部1号館108教室)までお越しください。場所はキャンパスマップ(パンフレットp.4-5)をご参照ください。
          </p>
        </div>
      </div>
      <div class="faq-box">
        <p class="q-num">Q2</p>
        <div class="p-box">
          <p>常盤祭期間中、購買や食堂は使える？</p>
          <p>
           大学会館内の購買は11/1(金)10：00～17：00のみ営業しております。<br/>
           第1食堂は休憩所として開放しておりますが、第1食堂・第2食堂ともに終日営業しておりません。 
          </p>
        </div>
      </div>
      <div class="faq-box">
        <p class="q-num">Q3</p>
        <div class="p-box">
          <p>雨が降ったとき、企画はどうなる？</p>
          <p>
            企画場所は、変更または中止となる場合がございます。詳しくはタイムテーブル(パンフレットp.8-10)、イベント&amp;ステージ(パンフレットp.12-13)をご確認ください。
          </p>
        </div>
      </div>
      <div class="faq-box">
        <p class="q-num">Q4</p>
        <div class="p-box">
          <p>具合が悪くなったら？</p>
          <p>
           お近くの大学祭実行委員にお声がけいただくか、本部までお越しください。<br/>
           混乱を避けるため救急車の手配は実行委員が行います。
          </p>
        </div>
      </div>
      <div class="faq-box">
        <p class="q-num">Q5</p>
        <div class="p-box">
          <p>最寄り駅・バス停への行き方は？</p>
          <p>
            アクセスマップ(パンフレットp.44)をご参照ください。
          </p>
        </div>
      </div>
      <div class="faq-box">
        <p class="q-num">Q6</p>
        <div class="p-box">
          <p>企画コンテストの投票方法は？</p>
          <p>
           各企画場所にあるQRコードより投票をお願いいたします。<br/>
           詳しくはパンフレットの裏表紙をご参照ください。
          </p>
        </div>
      </div>
      <div class="faq-box">
        <p class="q-num">Q7</p>
        <div class="p-box">
          <p>災害が発生した場合は？</p>
          <p>
           大学祭実行委員の指示に従い、お近くの避難場所へ避難してください。避難場所は理工学系研究図書館周辺、野外音楽堂、都市科学部棟裏です。場所はキャンパスマップ(パンフレットp.3-4)をご参照ください。
          </p>
        </div>
      </div>
      <div class="p-box">
          <p>
           その他お困りの際は、近くにいるＳＴＡＦＦと書かれたジャンパー・Ｔシャツを着ている大学祭実⾏委員にお聞きいただくか、本部にお越しください。
          </p>
        </div>
    </div>
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
.page-wrapper {
  margin: 2vw auto;
  width: 60vw;
  @include md {
    width: 80vw;
  }
}
.faq-box {
  display: flex;
  margin-bottom: 3rem;
  @include md {
    flex-direction: column;
  }
}
.q-num {
  margin-right: 2rem;
  font-size: 28px;
  @include md {
    margin-bottom: 0;
    font-size: 24px;
  }
}

p {
  margin-top: 0;
  margin-bottom: 2.5vw;
  @include md {
    margin-bottom: 4vw;
  }
}
.prepare {
  display: flex;
  justify-content: center;
  margin-top: 8vw;
}
</style>
