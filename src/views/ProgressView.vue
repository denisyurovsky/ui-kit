<template>
  <h1 class="heading">Progress bar</h1>
  <ProgressBar :percent="percent" />
  <ProgressBar :percent="percent" color="danger" />
  <ProgressBar :percent="percent" color="info" />
  <h1 class="heading">Progress circle</h1>
  <ProgressCircle :percent="percent" />
  <ProgressCircle :percent="percent" color="danger" />
  <ProgressCircle :percent="percent" color="info" />
</template>

<script setup>
import { ref } from "vue";
import ProgressBar from "@/components/Progress/ProgressBar.vue";
import ProgressCircle from "@/components/Progress/ProgressCircle.vue";
const percent = ref(0);

const interval = setInterval(() => {
  if (percent.value < 100) {
    percent.value++;
  } else {
    clearInterval(interval);
  }
}, 500);
</script>

<style lang="scss" scoped></style>
