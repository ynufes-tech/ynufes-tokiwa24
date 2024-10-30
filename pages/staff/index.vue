<script setup lang="ts">
useHead({
  title: 'Staff | 24常盤祭に関するお問い合わせ',
  meta: [
    {
      name: 'description',
      content: '24常盤祭に関するお問い合わせ方法についてご案内します',
    },
  ],
})
</script>

<template>
  <div class="page-root">
    <PageTitle title="STAFF" sub-title="大学祭に関するお問い合わせ" />
    <p>常盤祭に興味を持っていただきありがとうございます。</p>
    <p>お問い合わせに関しましては、メールにてお願いします。</p>
    <div class="box">
      <p>メールでのお問い合わせ</p>
      <p>メールアドレス：<u>24tokiwa.soumu@gmail.com</u></p>
      <p>※HPに関するお問い合わせは以下までお願いします。</p>
      <p>メールアドレス：<u>24ynufes.tech@gmail.com</u></p>
      <p>
        お問い合わせいただく場合、本文にお名前とお問い合わせ内容の記入を忘れずにお願いします。
      </p>
      <p>お問い合わせ内容を確認後、担当者より連絡させていただきます。</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;
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
.box {
  background-color: #eee;
  padding: 0% 4%;
  opacity: 70%;
  border-radius: 2rem;
  margin: 0 8vw 4vh 8vw;
}
</style>
