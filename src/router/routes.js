import MainPage from "@/views/MainPage.vue";
import ButtonView from "@/views/ButtonView.vue";
import TypographyView from "@/views/TypographyView.vue";
import CheckboxView from "@/views/CheckboxView.vue";
import RadiobuttonView from "@/views/RadiobuttonView.vue";

const routes = [
  {
    name: "main",
    path: "/",
    component: MainPage,
    meta: {
      showInLayout: false,
    },
  },
  {
    name: "button",
    path: "/button",
    component: ButtonView,
  },
  {
    name: "typography",
    path: "/typography",
    component: TypographyView,
  },
  {
    name: "checkbox",
    path: "/checkbox",
    component: CheckboxView,
  },
  {
    name: "radiobutton",
    path: "/radiobutton",
    component: RadiobuttonView,
  },
];

export default routes;
