import { createRouter, createWebHistory } from "vue-router";
import User from "@/components/User.vue";
import Dynamic1 from "@/components/Dynamic1.vue";
import Dynamic2 from "@/components/Dynamic2.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import SideBar from "@/components/SideBar.vue";
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
    meta: { isAuth: true },
    sensitive: true, // => case sensitive hai
    strict: true, //exact match mtlb /dy1 hai tu good /dy1/ =>not work
  },
  {
    path: "/dy2",
    name: "da2",
    component: Dynamic2,
  },
  // {
  //   path: "/dy2/:id?",
  //   name: "da2",
  //   component: Dynamic2,
  // },

  // id is number only
  {
    path: "/dy2/:id(\\d+)",
    name: "det",
    component: HelloWorld,
    props: true,
  },
  //id is number only and catName is string only
  {
    path: "/dy2/:id(\\d+)/category/:catName([a-z]+$)",
    name: "dxetr",
    component: HelloWorld,
    props: true,
  },
  // {
  //   path: "/dy2/:id",
  //   name: "det",
  //   component: HelloWorld,
  //   props: true,
  // },
  // {
  //   path: "/dy2/:id",
  //   name: "det",
  //   component: HelloWorld,
  // },
  {
    path: "/:pathMathch(.*)*",
    name: "s",
    component: TheWelcome,
  },
  //   {
  //     path: "/home",
  //     redirect: "/",
  //   },
  //props in components
  {
    path: "/",
    name: "user1",
    components: { default: User, sidebar: SideBar },
    alias: "/home",
    props: { default: true, sidebar: false },
  },
  // {
  //   path: "/",
  //   name: "user1",
  //   components: { default: User, sidebar: SideBar },
  //   alias: "/home",
  // },
  // {
  //   path: "/",
  //   name: "user1",
  //   component: User,
  //   alias: "/home",
  // },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; //top of page
  },
});
export default router;
