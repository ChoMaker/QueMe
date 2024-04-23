import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import ClientHome from "../views/ClientHome.vue";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import ConfirmReservation from "../views/ConfirmReserve.vue";
import Pay from "../views/Pay.vue";
import MenuDrink from "../views/MenuDrink.vue";
import Profile from "../views/Profile.vue";
import Register from "../views/Register.vue";
import AdminEvent from "../views/AdminEvent.vue";
import AdminLogin from "../views/AdminLogin.vue";
import AdminQue from "../views/AdminQue.vue";
import AdminQueStatus from "../views/AdminQueStatus.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: {
        title: "Login",
      },
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        title: "Reservation",
      },
    },
    {
      path: "/client-home",
      name: "ClientHome",
      component: ClientHome,
      meta: {
        title: "Home Page",
      },
    },
    {
      path: "/menu",
      name: "Menu",
      component: Menu,
      meta: {
        title: "Menu Page",
      },
    },
    {
      path: "/confirm-reserve",
      name: "ConfirmReserve",
      component: ConfirmReservation,
      meta: {
        title: "Confirm Reservation",
      },
    },
    {
      path: "/pay",
      name: "Pay",
      component: Pay,
      meta: {
        title: "Payment Page",
      },
    },
    {
      path: "/menu-drink",
      name: "MenuDrink",
      component: MenuDrink,
      meta: {
        title: "Menu Drink",
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        title: "Profile",
      },
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: {
        title: "Register",
      },
    },
    {
      path: "/admin-event",
      name: "AdminEvent",
      component: AdminEvent,
      meta: {
        title: "Admin Event",
      },
    },
    {
      path: "/admin-que",
      name: "AdminQue",
      component: AdminQue,
      meta: {
        title: "Admin Que",
      },
    },
    {
      path: "/admin-login",
      name: "AdminLogin",
      component: AdminLogin,
      meta: {
        title: "Admin Login",
      },
    },
    {
      path: "/admin-status",
      name: "AdminQueStatus",
      component: AdminQueStatus,
      meta: {
        title: "Admin-Que",
      },
    },
  ],
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Default Title';
});

export default router;
