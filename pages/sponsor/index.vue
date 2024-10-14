<script setup lang="ts">
useHead({
  title: "Sponsor | 24常盤祭協賛企業紹介",
  meta: [
    { name: "description", content: "24常盤祭の協賛企業をご紹介します" },
  ],
});
import companies from '~/public/sponsor.json';
</script>

<template>
    <div class="page-root">
      <PageTitle title="SPONSOR" sub-title="協賛企業一覧" />
      <p>「24常盤祭」を開催するにあたり、多くの企業の皆様より多大なご協力を賜りました。
        この場をお借りいたしまして、心より感謝申し上げます。</p>
      <p>ご協賛いただきました企業を以下に掲載させていただきます。</p>

      <div class="sponsor-box">
        <SectionTitle sectionTitle="広告協賛"/>
        <ul>
          <li v-for="(company, index) in companies.advertise" :key="'adv-' + index">
            {{ company }}
          </li>
        </ul>
      </div>
      <div class="sponsor-box">
        <SectionTitle sectionTitle="物品協賛"/>
        <ul>
          <li v-for="(company, index) in companies.product" :key="'pro-' + index">
            {{ company }}
          </li>
        </ul>
      </div>
      <div class="sponsor-box">
        <SectionTitle sectionTitle="個人協賛"/>
        <ul>
          <li v-for="(company, index) in companies.individual" :key="'ind-' + index">
            {{ company }}
          </li>
        </ul>
      </div>
      <div class="sponsor-box">
        <SectionTitle sectionTitle="ブース協賛"/>
        <ul>
          <li v-for="(company, index) in companies.booth" :key="'boo-' + index">
            {{ company }}
          </li>
        </ul>
      </div>
      <div class="sponsor-box">
        <SectionTitle sectionTitle="寄付"/>
        <ul>
          <li v-for="(company, index) in companies.donation" :key="'don-' + index">
            {{ company }}
          </li>
        </ul>
      </div>
      <div class="sponsor-box">
        <SectionTitle sectionTitle="その他のご協賛"/>
        <ul>
          <li v-for="(company, index) in companies.other" :key="'oth-' + index">
            {{ company }}
          </li>
        </ul>
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
p{
  margin: 0 10%;
}
li{
  margin: 0 5%;
}
.sponsor-box {
  margin-top: 3%;
}
.prepare{
  display: flex;
  justify-content: center;
  margin-top: 8vw;
}
</style>