import { createRouter, createWebHistory } from "vue-router";
import User from "@/components/User.vue";
import Dynamic1 from "@/components/Dynamic1.vue";
import Dynamic2 from "@/components/Dynamic2.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";
const routes = [
  //   {
  //     path: "/",
  //     name: "user",
  //     component: User,
  //   },
  {
    path: "/dy1",
    name: "da1",
    component: Dynamic1,
  },
  {
    path: "/dy2",
    name: "da2",
    component: Dynamic2,
  },
  {
    path: "/dy2/:id",
    name: "det",
    component: HelloWorld,
  },
  {
    path: "/:pathMathch(.*)*",
    name: "s",
    component: TheWelcome,
  },
  //   {
  //     path: "/home",
  //     redirect: "/",
  //   },
  {
    path: "/",
    name: "user1",
    component: User,
    alias: "/home",
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});
export default router;
