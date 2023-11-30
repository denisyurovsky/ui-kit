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
  <h1 class="heading">checkbox group</h1>
  <MyCheckboxGroup v-model="selectedProducts" :options="products" />
  You've chosen: {{ selectedProducts.map((item) => item.name).join(", ") }}
  <h1 class="heading">switch</h1>
  <MyCheckbox
    id="switch"
    name="switch"
    v-model="switchModel"
    type="switch"
    label="switch"
  />
  {{ switchModel }}
</template>

<script setup>
import MyCheckbox from "@/components/Checkbox/MyCheckbox.vue";
import MyCheckboxGroup from "@/components/Checkbox/MyCheckboxGroup.vue";
import { ref } from "vue";
const isActive = ref(false);
const switchModel = ref(false);
const selectedProducts = ref([]);
const products = ref([
  {
    name: "bread",
    id: "213",
  },
  {
    name: "milk",
    id: "21354",
  },
  {
    name: "butter",
    id: "3213",
  },
]);
</script>

<style lang="scss" scoped></style>
