<template>
  <div v-for="(option, idx) in options" :key="option.id">
    <MyCheckbox
      :label="option.name"
      :id="option.id"
      :value="option"
      group
      @update:modelValue="handleCheck"
    />
  </div>
</template>

<script setup>
import MyCheckbox from "@/components/CheckBox/MyCheckbox.vue";
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const handleCheck = (obj) => {
  let result = [...props.modelValue];
  if (obj.checked) {
    result.push(obj.value);
  } else {
    result = result.filter((item) => item.id !== obj.value.id);
  }
  emit("update:modelValue", result);
};
</script>

<style lang="scss" scoped></style>
