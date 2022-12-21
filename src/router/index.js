import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import Layout from "@/components/Layout";
import ImageManagementView from "@/views/ImageManagementView";
import StockManagementView from "@/views/StockManagementView";
import PriceManagementView from "@/views/PriceManagementView";
import SalesQuantityManagementView from "@/views/SalesQuantityManagementView";

const routes = [
  {
    path: "/",
    component: Layout,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
