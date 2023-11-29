<template>
  <div class="sidebar" :class="{ sidebar__open: isOpen }">
    <router-link
      class="sidebar__link"
      v-for="link of links"
      :key="link.name"
      :to="link.path"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
const links = ref([
  { name: "Typography", path: "/typography" },
  { name: "Button", path: "/button" },
]);

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  gap: 20px;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);

  &__open {
    transform: translateX(0px);
  }
}
</style>
