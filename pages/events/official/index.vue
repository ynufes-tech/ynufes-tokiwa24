<script setup lang="ts">
useHead({
  title: '本部企画一覧 | 24常盤祭公式HP~夢灯~',
  meta: [
    {
      name: 'description',
      content: '本部企画の一覧を掲載しています',
    },
  ],
})
</script>

<template>
  <div class="page-root">
    <PageTitle title="OFFICIAL" sub-title="本部企画一覧" />
    <div class="page-wrapper">
      <WhiteBubble
      imagePath=~/~/assets/images/official-event-imgs/seinen-img.webp
      title="「飛べない人はただの人」杯"
      mainscript="全6競技によるスポーツ大会を行います！出場者による熱戦をぜひ野外音楽堂にてお楽しみください！優勝予想のコーナーで見事的中した方は、景品のプレゼントも🎁
      競技例　・早食い対決・気配切り対決・足ツボ耐久対決 " place="図書館"
      day="11/1(土)15:00~16:00" class="right" />
      <RedBubble
        title="ROCK IN TOKIWA FES.2024"
        mainscript="野音でロックフェス、今年も開幕！総勢13組のバンドから選ばれた4バンドのアツいパフォーマンスを見逃すな！常盤祭初日は野音でぶち上がりましょう！"
        place="野外音楽堂特設ステージ(経営2号館109教室特設ステージ)"
        day="11月1日(金)18:00～20:00"
        class="left"
      />
      <WhiteBubble
        title="灯火"
        mainscript="「灯火」には、今回の常盤祭のテーマである「夢灯」にちなみ、来場してくださる皆様の夢を灯すような花火になればいいなという思いを込めています！ぜひご覧ください！また、当日は退場規制にご協力ください。"
        place="野外音楽堂特設ステージ(小雨は決行、雨天時・強風時は中止)"
        day="11月1日(金)19:45～20:00"
        class="right"
      />
      <RedBubble
        title="成年の主張"
        mainscript="あの大人気企画が横国に！！
普段伝えられていない想いを今、野外音楽堂特設ステージで主張してみませんか！？
参加してくれた方にはプレゼントをご用意しています🎁たくさんの応募お待ちしています！！
"
        place="野外音楽堂特設ステージ(メディアホール)"
        day="11月2日(土)14:30～16:00"
        class="left"
      />
      <WhiteBubble
        title="かもめ先輩ワールド"
        mainscript="かもめ先輩ワールドでは、いつもは見ることのできないいろいろなカモメ先輩を見つけることができます！当日、あなたオリジナルのカモメ先輩を描いて展示することもできるので、ぜひ図書館へお立ち寄りください！"
        place="情報ラウンジ"
        day="11月1日(金)13:00～16:30
11月2日(土)10:00～16:30
11月3日(日)10:00～14:30"
        class="right"
      />
      <RedBubble
        title="HAPPY21"
        mainscript="昨年度の大人気ゲーム企画、カジノ風ゲームが図書館に再登場！豪華景品も…！？大人から子供まで楽しめるゲームです、是非遊びに来てください！"
        place="11月1日(金)13:00～16:30
11月2日(土)10:00～16:30
11月3日(日)10:00～14:30"
        day="11/1(土)15:00~16:00"
        class="left"
      />
      <WhiteBubble
        title="毛糸モンスターファクトリー"
        mainscript="毛糸を使ってぽんぽんモンスターを作ります！毛糸を巻いてハサミで整えればあっという間に可愛いぽんぽんが完成！是非、図書館に遊びに来てください！"
        place="情報ラウンジ手前"
        day="11月1日(金)13:00～16:30
11月2日(土)10:00～16:30
11月3日(日)10:00～14:30
"
        class="right"
      />
      <RedBubble
        title="周遊謎解き　～囚われし浜の鳥～"
        mainscript="大変だ！かもめ先輩が何者かによってさらわれてしまった！そこで君たちには大学内の謎を解いて周り、かもめ先輩を助け出して欲しい！見事、かもめ先輩を救出できたら景品もあるぞ！図書館で待っている！"
        place="情報ラウンジ"
        day="11月1日(金)13:00～16:30
11月2日(土)10:00～16:30
11月3日(日)10:00～14:30
"
        class="left"
      />
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
