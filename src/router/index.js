import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "NMS - Moving With You"
    }
  },
  {
    path: "/content-creation",
    name: "contentCreation",
    component: () => import("@/views/ContentCreation.vue"),
    meta: {
      title: "Capture, Create, Connect"
    }
  },
  {
    path: "/graphic-design",
    name: "graphicDesign",
    component: () => import("@/views/GraphicDesign.vue"),
    meta: {
      title: "Designs to Captivate"
    }
  },
  {
    path: "/task-automation",
    name: "taskAutomation",
    component: () => import("@/views/TaskAutomation.vue"),
    meta: {
      title: "Efficiency with Automation"
    }
  },
  {
    path: "/web-design",
    name: "webDesign",
    component: () => import("@/views/WebDesign.vue"),
    meta: {
      title: "Websites that Impress"
    }
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("@/views/PortfolioView.vue"),
    meta: {
      title: "Our Handy Work"
    }
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Moving With You";
  next();
});

export default router;
