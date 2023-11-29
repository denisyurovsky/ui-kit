<script setup>
import layout from "@/components/layout.vue";
import LayoutSidebar from "@/components/LayoutSidebar.vue";
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>

<template>
  <div class="container">
    <div @click="isMenuOpen = !isMenuOpen" class="sidebar-toggle">&#5125;</div>
    <layout />
    <LayoutSidebar :isOpen="isMenuOpen" @link-clicked="isMenuOpen = false" />
    <div class="content" :class="{ content_full: !isMenuOpen }">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";

.content {
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &__full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  z-index: 3;
  height: 100%;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
