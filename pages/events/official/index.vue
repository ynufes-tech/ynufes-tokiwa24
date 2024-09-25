<script setup lang="ts">
useHead({
  title: "本部企画一覧 | 24常盤祭公式HP~夢灯~",
  meta: [
    {
      name: "description",
      content: "本部企画の一覧を掲載しています",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="OFFICIAL" sub-title="本部企画一覧" />
    <div class="page-wrapper">
      <WhiteBubble
        title="企画名"
        mainscript="企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画"
        place="図書館"
        day="11/1(土)15:00~16:00"
        class="right"
      />
    </div>
    <FloatingButton />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.page-wrapper{
    margin: 0 15vw;
}
.right{
    margin-left: 40vw;
}
</style>
