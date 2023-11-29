import { createApp } from "vue";
import "./style.css";
import App from "@/App.vue";
import router from "@/router";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { far } from "@fortawesome/free-regular-svg-icons";

library.add(far);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
