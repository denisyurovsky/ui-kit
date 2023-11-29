<template>
  <h1 class="heading">Checkboxes</h1>
  <MyCheckbox
    label="checkbox active"
    id="checkboxActive"
    name="checkboxActive"
    value="checkboxActive"
    v-model="isActive"
  />
  {{ isActive }}
  <h1 class="heading">disabled</h1>
  <MyCheckbox disabled />
</template>

<script setup>
import MyCheckbox from "@/components/Checkbox/MyCheckbox.vue";
import { ref } from "vue";
const isActive = ref(false);
</script>

<style lang="scss" scoped></style>
