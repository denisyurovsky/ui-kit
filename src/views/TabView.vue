<template>
  <h1 class="heading">Tabs</h1>
  <Tabs v-slot="{ activeTab }" :names="tabs">
    <div v-if="activeTab == 'vue'">vue vue vue</div>
    <div v-if="activeTab == 'about'">about project blah blah blah</div>
  </Tabs>
</template>

<script setup>
import Tabs from "@/components/Tabs/Tabs.vue";
const tabs = [
  {
    name: "about",
    label: "о проекте",
  },
  {
    name: "vue",
    label: "о vue",
  },
];
</script>

<style lang="scss" scoped></style>
