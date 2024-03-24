import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import ClientHome from "../views/ClientHome.vue";
import Home from "../views/Home.vue";

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
    {
      path: "/menu",
      name: "Menu",
      component: () => import("../views/Menu.vue"),
    },
    {
      path: "/confirm-reserve",
      name: "ConfirmReserve",
      component: () => import("../views/ConfirmReserve.vue"),
    },
    {
      path: "/pay",
      name: "Pay",
      component: () => import("../views/Pay.vue"),
    },
    {
      path: "/menu-drink",
      name: "MenuDrink",
      component: () => import("../views/MenuDrink.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/admin-event",
      name: "AdminEvent",
      component: () => import("../views/AdminEvent.vue"),
    },
    {
      path: "/admin-que",
      name: "AdminQue",
      component: () => import("../views/AdminQue.vue"),
    },

  ],
});

export default router;
