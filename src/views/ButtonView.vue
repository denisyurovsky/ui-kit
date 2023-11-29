<template>
  <h1 class="heading">Button</h1>
  <MyButton>Hello world</MyButton>
  <h1>colors</h1>
  <MyButton color="primary">primary</MyButton>
  <MyButton color="second">second</MyButton>
  <MyButton color="success">success</MyButton>
  <MyButton color="warning">warning</MyButton>
  <MyButton color="info">info</MyButton>
  <MyButton color="danger">danger</MyButton>
  <h1>rounded</h1>
  <MyButton rounded>rounded</MyButton>
  <h1>disabled</h1>
  <MyButton disabled>disabled</MyButton>
  <h1>large</h1>
  <MyButton large>large</MyButton>
  <h1>outlined</h1>
  <MyButton outlined>outlined</MyButton>
  <h1>icon</h1>
  <MyButton icon="heart">with icon</MyButton>
  <MyButton icon="bell" outlined></MyButton>
  <MyButton icon="bell">with icon</MyButton>
  <h1>@click event</h1>
  <MyButton @click="handleClick">click me!</MyButton>
</template>

<script setup>
import MyButton from "@/components/MyButton.vue";
const handleClick = () => alert("you clicked me!");
</script>

<style lang="scss" scoped></style>
