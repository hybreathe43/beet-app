// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import MyPligin from "./components/plugins/MyPligin";
import router from "./router";

const app = createApp(App);
app.use(MyPligin);
app.use(router);
app.mount("#app");

router.beforeEach((to, form) => {
  console.log(to.meta);
});
