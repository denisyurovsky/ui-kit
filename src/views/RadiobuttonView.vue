<template>
  <div v-for="option in options" :key="option">
    <radiobutton
      :value="option"
      :label="option"
      :id="option"
      name="option"
      v-model="radioModel"
    />
  </div>
  Selected value: {{ radioModel }}
  <h1 class="heading">disabled</h1>
  <Radiobutton disabled />
</template>

<script setup>
import Radiobutton from "@/components/RadioButton/Radiobutton.vue";
import { ref } from "vue";
const options = ref(["bread", "milk"]);
const radioModel = ref("");
</script>

<style lang="scss" scoped></style>
