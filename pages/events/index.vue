<script setup lang="ts">
import events from "assets/data/events.json";

useHead({
  title: "Events | 24常盤祭公式HP~夢灯~",
  meta: [
    { name: "description", content: "24常盤祭についての情報を掲載しています" },
  ],
})
</script>

<template>
  <div class="page-root">
    <PageTitle title="EVENTS" sub-title="企画一覧" />
    <div class="inner-events-page">
      <div class="events-list">
        <NuxtLink
            v-for="event in events"
            :key="event.id"
            :to="`/events/${event.id}`"
            class="events-elements"
        >
          <EventsComponent :event-data="event" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/scss/_breakpoint.scss" as *;

.inner-events-page {
  position: relative;
  top: 20%;
  left: 20%;
  width: 60%;
  @include md {
    top: 20%;
  }
  @include sm {
    top: 20%;
  }
}
.events-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 75svw;

  .events-elements {
    width: 25svw;
    min-width: 300px;
    max-width: 400px;
    height: 35svh;
    min-height: 275px;
    max-height: 300px;
    text-decoration: none;
    color: #333333;
    @include md {
      min-width: 180px;
      max-width: 300px;
      max-height: 256px;
      min-height: 160px;
    }
  }
}

</style>