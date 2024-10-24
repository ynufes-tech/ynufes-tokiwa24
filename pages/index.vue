<script setup lang="ts">
import BannerComponent from '~/components/BannerComponent.vue'

useHead({
  title: 'Top | 24常盤祭公式HP~夢灯~',
  meta: [
    {
      name: 'description',
      content:
        '11/1,2,3に開催される24常盤祭 公式HPです!! 最新情報を随時更新していきます!!',
    },
  ],
})
//v3.0.0 released on 2024.10.24
</script>

<template>
  <div class="page-root">
    <div class="title-container">
      <img id="top-title" src="@/assets/images/yumeakari.png" />
    </div>
    <div class="date">
      <p>From 2024.11.01 Fri</p>
      <p>&emsp;&emsp;&emsp;&nbsp;2024.11.02 Sat</p>
      <p>&nbsp;&nbsp;To&emsp;&nbsp;&nbsp;2024.11.03 Sun</p>
    </div>
    <div class="in-production">
      <p>このサイトはただいま制作中です。</p>
      <p>常盤祭に関する最新情報は随時更新します。</p>
      <div class="banner-holder">
        <BannerComponent />
      </div>
    </div>
    <div class="table-units">
      <TableOfContents
        title="ABOUT"
        sub-title="大学祭について"
        page-link="/about"
      />
      <TableOfContents
        title="ACCESS"
        sub-title="アクセス"
        page-link="/access"
      />
      <TableOfContents
        title="STAFF"
        sub-title="お問い合わせ"
        page-link="/staff"
      />
      <TableOfContents
        title="CONNECTION"
        sub-title="他大学の大学祭情報"
        page-link="/connection"
      />
      <TableOfContents
        title="EVENTS"
        sub-title="企画一覧"
        page-link="/events"
      />
      <TableOfContents
        title="SPONSOR"
        sub-title="ご協賛団体一覧"
        page-link="/sponsor"
      />
      <TableOfContents
        title="CONTEST"
        sub-title="企画コンテスト"
        page-link="/contest"
      />
    </div>
    <SNS />
    <MapButton />
    <FloatingButton />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.page-root {
  position: relative;
  z-index: 10; /* コンテンツを最前面に配置 */
}

#top-title {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: min(25vh, 25vw);
  margin-top: calc(9vh + 6vw);
  margin-left: 20vw;
  margin-right: auto;

  @include xl {
    margin-left: 15vw;
  }
  @include lg {
    margin-left: 12vw;
  }
  @include md {
    margin-left: 10vw;
  }
  @include sm {
    margin-left: 8vw;
  }
}

.date {
  font-size: min(2.8rem, 5vw);
  box-sizing: border-box;
  margin: min(5rem, 5vw) auto 0;
  width: min(70vw, 30em);
  letter-spacing: 0.1125em;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  line-height: 0.45em;
  transform: translateX(13%);
  @include sm {
    margin-top: 38vw;
  }
}

.in-production {
  line-height: 0.45em;
  text-align: center;
  font-size: 2rem;
  margin-top: 4rem;
  @include lg {
    font-size: 1.8rem;
    margin-top: 6rem;
  }
  @include md {
    font-size: 1.2rem;
    margin-top: 8rem;
  }
  @include sm {
    font-size: 0.93rem;
  }
}

.table-units {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  width: 85%;
  max-width: 1200px;
  @include md {
    width: 80%;
  }
  @include sm {
    width: 97%;
  }
}

hr {
  display: none;
}

.table-units hr {
  display: none;
}

.banner-holder {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>
