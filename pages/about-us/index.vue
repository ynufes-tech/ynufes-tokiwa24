<script setup lang="ts">
import OverlapHeadline from "~/components/OverlapHeadline.vue";
</script>

<template>
  <div class="page-root">
    <PageTitle title="ABOUT US" sub-title="大学祭実行委員会について" />
    <div class="intro">
      <p id="first">
        横浜国立大学大学祭実行委員会は、年に二回の大学祭を企画・運営している組織です。
      </p>
      <p>
        企画部、編集部、会場部、物品部、技術部、経理部、総務部という７つの部局から成り立っています。
      </p>
    </div>
    <div class="chairman-sec">
      <h1 id="chairman-headline">委員長メッセージ</h1>
      <hr />
      <div class="chairman-frame">
        <img
          alt="chairman"
          class="chairman-img"
          src="~/assets/images/departments-img/chairman-img.webp"
        />
        <div class="chairman-message">
          <p>
            皆さま、2024常盤祭にご来場いただき誠にありがとうございます。今年のテーマは『夢灯』です。常盤祭に関わる皆さまが、夢を灯す光を見つけられるよう、実行委員一同、準備を重ねてまいりました。2024常盤祭が、皆さまにとって笑顔あふれる特別な3日間となるよう、全力でおもてなしさせていただきます。どうぞ最後までお楽しみください！
          </p>
        </div>
      </div>
    </div>
    <h1 id="the-seven-departments">7つの部局について</h1>
    <div class="departments-wrapper">
      <div class="box">
        <OverlapHeadline title="Planning" sub-title="企画部" />
        <div class="frame">
          <p>
            こんにちは！企画部です！<br />
            私たちは大学祭の花火企画やステージ企画、子供向けの図書館企画の企画・制作・運営を行っています！<br />
            大学祭当日野外音楽堂などのステージや図書館にお越しいただき、本部企画を楽しんでください！<br />
            本部企画一覧にて企画を紹介しているので是非ご覧ください！
          </p>
        </div>
      </div>
      <div class="img-box">
        <img
          id="left-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/departments-img/plan1.webp"
        />
        <img
          id="right-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/departments-img/plan2.webp"
        />
      </div>
    </div>
    <div class="departments-wrapper" id="reverse">
      <div class="img-box">
        <img
          id="left-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/rectangle-tmp.webp"
        />
        <img
          id="right-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/rectangle-tmp.webp"
        />
      </div>
      <div class="box">
        <OverlapHeadline title="Editional" sub-title="編集部" />
        <div class="frame">
          <p>
            あいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつあいさつメッセージメッセージ
          </p>
        </div>
      </div>
    </div>
    <OverlapHeadlinePP
      id="exception-headline"
      title="Peace Preservation"
      sub-title="会場部"
    />
    <div class="departments-wrapper">
      <div class="box">
        <div class="frame">
          <p>
            会場部は、来場者の皆様の安全を守るために、大学祭の会場設営に携わったり、当日は様々な場所を巡回・パトロールしています。当日、なにかお困りのことなどございましたら、気兼ねなくお声がけください。
          </p>
        </div>
      </div>
      <div class="img-box">
        <img
          id="right-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/departments-img/pp1.webp"
        />
        <img
          id="left-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/departments-img/pp2.webp"
        />
      </div>
    </div>
    <div class="departments-wrapper" id="reverse">
      <div class="img-box">
        <img
          id="right-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/departments-img/equip1.webp"
        />
        <img
          id="left-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/departments-img/equip2.webp"
        />
      </div>
      <div class="box">
        <OverlapHeadline title="Equipment" sub-title="物品部" />
        <div class="frame">
          <p>
            物品部は企業とやり取りをして、テントや消火器をはじめとする団体の企画に必要な物品の管理をする部局です。直前期以外には団体に貸し出すテントの天幕を洗う活動をしています。表に立って活動することはあまりありませんが、学祭を支える縁の下の力持ちとして、円滑な運営や準備に尽力しています。
          </p>
        </div>
      </div>
    </div>
    <div class="departments-wrapper">
      <div class="box">
        <OverlapHeadline title="Technology" sub-title="技術部" />
        <div class="frame">
          <p>
            あいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつあいさつメッセージメッセージ
          </p>
        </div>
      </div>
      <div class="img-box">
        <img
          id="left-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/rectangle-tmp.webp"
        />
        <img
          id="right-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/rectangle-tmp.webp"
        />
      </div>
    </div>
    <div class="departments-wrapper" id="reverse">
      <div class="img-box">
        <img
          id="left-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/departments-img/acc1.webp"
        />
        <img
          id="right-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/departments-img/acc2.webp"
        />
      </div>
      <div class="box">
        <OverlapHeadline title="Accounting" sub-title="経理部" />
        <div class="frame">
          <p>
            こんにちは！経理部です✨<br />
            経理部は、大学祭の運営に必要なお金を管轄するとても重要な部局です💰<br />
            私たちは、予算の作成や資金管理、決算の取りまとめなどを通じて、大学祭が円滑に運営されるようサポートしています！<br />
            当日は来場者の皆様と直接関わる機会はありませんが、ぜひ楽しんでいただけたら嬉しいです！
          </p>
        </div>
      </div>
    </div>
    <OverlapHeadlinePP
      id="exception-headline"
      title="General Affairs"
      sub-title="総務部"
    />
    <div class="departments-wrapper">
      <div class="box">
        <div class="frame">
          <p>
            あいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつメッセージメッセージあいさつあいさつメッセージメッセージ
          </p>
        </div>
      </div>
      <div class="img-box">
        <img
          id="right-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/rectangle-tmp.webp"
        />
        <img
          id="left-img"
          alt="紹介画像"
          class="departments-img"
          src="~/assets/images/rectangle-tmp.webp"
        />
      </div>
    </div>
    <FloatingButton />
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
p {
  margin: 0;
}
#first {
  margin-bottom: 1rem;
}
.intro {
  margin: 0 15vw;
  @include md {
    margin: 0 8vw;
  }
}
#chairman-headline {
  margin-left: 20vw;
  margin-bottom: 0;
}
hr {
  margin-top: 0;
  margin-right: 20vw;
  border: solid 1px #000000;
}
.chairman-img {
  width: 300px;
  height: auto;
  margin-left: 5vw;
  margin-right: 2vw;
  @include md {
    margin: 1rem auto;
  }
}
.chairman-frame {
  display: flex;
  margin: 0 12vw;
  justify-content: space-between;
  @include md {
    margin: 0 5vw;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
}
h1 {
  @include md {
    font-size: 30px;
  }
}
.chairman-message {
  width: 100%;
  text-align: center;
}
#the-seven-departments {
  text-align: center;
  transform: translateX(10vw);
  //margin-right: 20rem;
}
.departments-wrapper {
  display: flex;
  @include md {
    display: flex;
    flex-direction: column;
  }
  margin: 0 10vw;
  @include lg {
    margin: 0 8vw;
  }
  @include md {
    margin: 0 4vw 3rem;
    padding: 0;
  }
  padding-left: 2vw;
  margin-bottom: 5rem;
}
#reverse {
  @include md {
    display: flex;
    flex-direction: column-reverse;
  }
}
#exception-headline {
  margin-left: 10vw;
}
.box {
  margin-right: 2rem;
  @include lg {
    margin-right: 0;
  }
}
.departments-img {
  width: 300px;
  margin: 1rem;
}
.frame {
  background-color: #eee;
  opacity: 60%;
  border-radius: 2rem;
  width: 35vw;
  margin: 0;
  padding: 1rem;
  @include lg {
    margin-right: 1rem;
  }
  @include md {
    margin: -2.8rem auto 0;
    width: 85vw;
  }
}
.img-box {
  display: flex;
  flex-direction: column;
  width: 35vw;
  margin-top: 1rem;
  padding-left: 3rem;
  @include lg {
    padding-left: 0;
    margin-right: 4rem;
  }
  @include md {
    margin-left: 7vw;
  }
  @include md {
    margin-left: 0;
  }
}
#right-img {
  margin: 0 auto 0;
  @include md {
    margin-left: 25vw;
  }
  @include sm {
    margin-left: 13vw;
  }
}
.prepare {
  display: flex;
  justify-content: center;
  margin-top: 8vw;
}
</style>
