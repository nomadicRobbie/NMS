import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: () => import("@/views/HireUsView.vue"),
  // },
  // {
  //   path: "/hireUs",
  //   name: "hireUs",
  //   component: () => import("@/views/HireUsView.vue"),
  // },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("@/views/ShopView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-link",
  scrollBehavior(to, from, savedPosition) {
    if (to.name === "contact") {
      const viewportHeight = window.innerHeight;
      const middleOfViewport = viewportHeight / 1.15;
      return { left: 0, top: middleOfViewport };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
