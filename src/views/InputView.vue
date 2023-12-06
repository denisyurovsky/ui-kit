<template>
  <MyInput
    :error="v.input1.$errors"
    v-model="input1"
    label="name"
    name="blabla"
    placeholder="enter name"
  />
  <MyInput
    :error="v.input2.$errors"
    v-model="input2"
    type="email"
    label="name"
    name="blabla"
    placeholder="enter mail"
  />
  <MyInput
    :error="v.input3.$errors"
    v-model="input3"
    type="number"
    label="number"
    name="blabla"
    placeholder="enter number"
  />
  <MyInput
    :error="v.input4.$errors"
    v-model="input4"
    type="password"
    label="password"
    name="blabla"
    placeholder="enter password"
  />
  <MyInput
    :error="v.input5.$errors"
    v-model="input5"
    type="password"
    label="password"
    name="blabla"
    placeholder="enter password"
  />

  <button @click="validate">validate</button>
</template>

<script setup>
import { computed, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  required,
  minLength,
  maxLength,
  numeric,
  email,
  sameAs,
} from "@vuelidate/validators";
import MyInput from "@/components/Input/MyInput.vue";
const input1 = ref("");
const input2 = ref("");
const input3 = ref();
const input4 = ref();
const input5 = ref();

const rules = computed(() => ({
  input1: {
    required: helpers.withMessage("Поле обязательно к заполнению", required),
    minLength: helpers.withMessage(`Минимальная длина 3 символа`, minLength(3)),
  },
  input2: {
    email: helpers.withMessage("Вы ввели невалидный email", email),
  },
  input3: {
    numeric: helpers.withMessage("Вы можете ввести только числа", numeric),
    minLength: helpers.withMessage(
      `Максимальная длина 2 символа`,
      maxLength(2)
    ),
  },
  input4: {
    required: helpers.withMessage("Поле обязательно к заполнению", required),
    minLength: helpers.withMessage(
      "Минимальная длина 8 символов",
      minLength(8)
    ),
  },
  input5: {
    required: helpers.withMessage("Поле обязательно к заполнению", required),

    sameAsPassword: helpers.withMessage("Пароли не совпадают", sameAs(input4)),
  },
}));
const v = useVuelidate(rules, { input1, input2, input3, input4, input5 });

function validate() {
  v.value.$touch();
  v.value.validate();
}
</script>

<style lang="scss" scoped></style>
