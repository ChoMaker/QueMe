import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import ClientHome from "../views/ClientHome.vue";
import Home from "../views/Home.vue";

/* const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('../views/Home.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
  },
  {
    path: "/client-home",
    name: "ClientHome",
    component: () => import('../views/ClientHome.vue'),
  },
]; */

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/client-home",
      name: "ClientHome",
      component: () => import("../views/ClientHome.vue"),
    },
  ],
});

/* const router = createRouter({
  history: createWebHistory(),
  routes,
});
 */
export default router;
