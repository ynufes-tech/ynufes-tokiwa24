<script setup lang="ts">
import events from '~/public/events.json'

useHead({
  title: 'Events | 24常盤祭公式HP~夢灯~',
  meta: [
    { name: 'description', content: '24常盤祭についての情報を掲載しています' },
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
    <FloatingButton />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/_breakpoint.scss' as *;

.inner-events-page {
  position: relative;
  top: 20%;
  left: 5%;
  width: 80%;
  margin-bottom: 5em;
  @include md {
    top: 20%;
    left: 3%;
  }
  @include sm {
    top: 20%;
    left: 5%;
  }
}
.events-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 90svw;
  @include md {
    width: 95svw;
  }
  @include sm {
    width: 90svw;
  }

  .events-elements {
    width: 30svw;
    height: 35svh;
    min-height: 275px;
    max-height: 300px;
    text-decoration: none;
    color: #333333;
    @include lg {
      width: 45svw;
    }
    @include md {
      width: 31svw;
      max-height: 256px;
      min-height: 160px;
    }
    @include sm {
      width: 45svw;
    }
  }
}
</style>
