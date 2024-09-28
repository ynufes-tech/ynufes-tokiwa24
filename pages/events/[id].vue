<script setup lang="ts">
import { useRoute } from 'vue-router'; // ルートからidを取得
import events from 'assets/data/events.json'; // イベントデータ
const route = useRoute();
const id = parseInt(route.params.id);
const event = events.find(e => e.id === id);
</script>

<template>
    <div class="page-root">
      <div class="id-page">
        <PageTitle :title="`EVENT`" :sub-title=" event?.e_name || 'イベントが見つかりません' "/>
        <div class="id-page-contents">
          <div class="icon-holder">
            <img
                :src="`https://storage.googleapis.com/tokiwa24-assets/icos/${id}.webp`"
                alt="project-icon"
                class="project-icon"
                @error="showNoImage"
            />
          </div>
          <SubTitle :sub-title="`${event?.e_name || '企画が見つかりません'}`"/>
          <div class="section-title-holder">
            <SectionTitle section-title="企画詳細"/>
          </div>
          <div class="description-holder">
            <p>{{ event?.e_description || '企画が見つかりません' }}</p>
          </div>
          <SubTitle :sub-title="`${event?.o_name || '企画が見つかりません'}`"/>
          <div class="section-title-holder">
            <SectionTitle section-title="団体説明"/>
          </div>
          <div class="description-holder">
            <p>{{ event?.o_description || '' }}</p>
          </div>
          <div class="section-title-holder">
            <SectionTitle section-title="各種リンク"/>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.id-page-contents{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-title-holder{
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 100vw;
}
.icon-holder{
  padding-bottom: 2em;
  width: 30vw;
  @include lg{
    width: 50vw;
  }
  .project-icon{
    width: 100%;
  }
}
.description-holder{
  width: 80vw;
  padding-bottom: 2em;
}
</style>