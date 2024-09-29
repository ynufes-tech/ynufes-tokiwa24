<script setup lang="ts">
useHead({
  title: "Faq | 24常盤祭公式HP~夢灯~",
  meta: [
    { name: "description", content: "大学祭に関するよくある質問を掲載しています" },
  ],
});
</script>

<template>
   <div class="page-root">
    <PageTitle :title="'FAQ'" :sub-title="'よくある質問'" />
    <!-- <div class="page-wrapper">
      <div class="faq-box">
        <p class="q-num">Q1</p>
        <div class="p-box">
          <p>落とし物や迷子の相談は？</p>
          <p>
            お近くのＳＴＡＦＦジャンパーを着た大学祭実⾏委員にお声がけいただくか、本部(経営学部1号館108教室)まお越しください。場所はキャンパスマップ(パンフレットp.3-4)をご参照ください。
          </p>
        </div>
      </div>
      <div class="faq-box">
        <p class="q-num">Q2</p>
        <div class="p-box">
          <p>落とし物や迷子の相談は？</p>
          <p>
            お近くのＳＴＡＦＦジャンパーを着た大学祭実⾏委員にお声がけいただくか、本部(経営学部1号館108教室)まお越しください。場所はキャンパスマップ(パンフレットp.3-4)をご参照ください。
          </p>
        </div>
      </div>
      <div class="faq-box">
        <p class="q-num">Q3</p>
        <div class="p-box">
          <p>落とし物や迷子の相談は？</p>
          <p>
            お近くのＳＴＡＦＦジャンパーを着た大学祭実⾏委員にお声がけいただくか、本部(経営学部1号館108教室)まお越しください。場所はキャンパスマップ(パンフレットp.3-4)をご参照ください。
          </p>
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
.prepare{
  display: flex;
  justify-content: center;
  margin-top: 8vw;
}
</style>