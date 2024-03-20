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
      path: "/admin-home",
      name: "AdminHome",
      component: () => import("../views/AdminHome.vue"),
    },
    {
      path: "/admin-que",
      name: "AdminQue",
      component: () => import("../views/AdminQue.vue"),
    },

  ],
});

// router.beforeEach((to, from, next) => {
//   // Check if the route requires authentication
//   if (to.meta.requiresAuth) {
//     // Check if the user is authenticated (you need to implement your authentication logic)
//     const isAuthenticated = /* implement your authentication logic */;
    
//     if (isAuthenticated) {
//       // Allow access to the route
//       next();
//     } else {
//       // Redirect to the login page if not authenticated
//       next({ name: 'Login' });
//     }
//   } else {
//     // Allow access to other routes that do not require authentication
//     next();
//   }
// });

/* const router = createRouter({
  history: createWebHistory(),
  routes,
});
 */
export default router;
