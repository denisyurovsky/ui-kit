import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import ButtonView from "../views/ButtonView.vue";
import Typography from "../views/Typography.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "main",
      path: "/",
      component: MainPage,
    },
    {
      name: "button",
      path: "/button",
      component: ButtonView,
    },
    {
      name: "typography",
      path: "/typography",
      component: Typography,
    },
  ],
});

export default router;
