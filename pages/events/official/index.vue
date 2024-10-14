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
        imagePath="~~/assets/images/official-event-imgs/seinen-img.webp"
        title="企画名"
        mainscript="企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画"
        place="図書館"
        day="11/1(土)15:00~16:00"
        class="right"
      />
      <RedBubble
        title="企画名"
        mainscript="企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画"
        place="図書館"
        day="11/1(土)15:00~16:00"
        class="left"
      />
      <WhiteBubble
        title="企画名"
        mainscript="企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画"
        place="図書館"
        day="11/1(土)15:00~16:00"
        class="right"
      />
      <RedBubble
        title="企画名"
        mainscript="企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画"
        place="図書館"
        day="11/1(土)15:00~16:00"
        class="left"
      />
      <WhiteBubble
        title="企画名"
        mainscript="企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画"
        place="図書館"
        day="11/1(土)15:00~16:00"
        class="right"
      />
      <RedBubble
        title="企画名"
        mainscript="企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画"
        place="図書館"
        day="11/1(土)15:00~16:00"
        class="left"
      />
      <WhiteBubble
        title="企画名"
        mainscript="企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画"
        place="図書館"
        day="11/1(土)15:00~16:00"
        class="right"
      />
      <RedBubble
        title="企画名"
        mainscript="企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画詳細企画"
        place="図書館"
        day="11/1(土)15:00~16:00"
        class="left"
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
.page-wrapper {
  margin: 10rem 15vw 0;
  @include xl {
    margin: 8rem 12vw 0;
  }
  @include lg {
    margin: 4rem 10vw 0;
  }
  @include md {
    margin: 0 8vw;
  }
  @include sm {
    margin: 0 3vw;
  }
}
.right {
  margin-left: auto;
  margin-right: 0;
  margin-top: -10rem;
  @include xl {
    margin-top: -8rem;
  }
  @include lg {
    margin-top: -4rem;
  }
  @include md {
    margin-top: 0;
  }
}
.left {
  margin-left: 0;
  margin-right: auto;
  margin-top: -10rem;
  @include xl {
    margin-top: -8rem;
  }
  @include lg {
    margin-top: -4rem;
  }
  @include md {
    margin-top: 0;
  }
}
</style>
