import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import Layout from "@/components/Layout";
import ImageManagementView from "@/views/ImageManagementView";
import StockManagementView from "@/views/StockManagementView";
import PriceManagementView from "@/views/PriceManagementView";
import SalesQuantityManagementView from "@/views/SalesQuantityManagementView";
import NotFound from "@/views/NotFoundView";

const routes = [
  {
    path: "/",
    component: Layout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/gestion-imagenes",
        name: "ImageManagement",
        component: ImageManagementView,
      },
      {
        path: "/gestion-stock",
        name: "StockManagement",
        component: StockManagementView,
      },
      {
        path: "/gestion-precios",
        name: "PricesManagement",
        component: PriceManagementView,
      },
      {
        path: "/gestion-cantidad-vendida",
        name: "SalesQuantityManagement",
        component: SalesQuantityManagementView,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // A Logged-in user can't go to login page again
  if (to.name === "login" && localStorage.getItem("token")) {
    next({ name: "home" });
    return;
    // the route requires authentication
  } else if (to.meta.requiresAuth) {
    // console.log(localStorage.getItem('token'))
    if (!localStorage.getItem("token")) {
      // user not logged in, send them to login page
      next({ name: "login" });
      return;
    }
    // else if (to.name === "app") {
    //   next({ name: "dashboard" });
    // }
    // } else if (!hasAccess(to.name)) {
    //   next("notfound");
    //   return;
    // }
  }
  next();
});

export default router;
