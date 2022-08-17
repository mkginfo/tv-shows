import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Home" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "About" },
  },
  {
    path: "/showDetails/:id",
    name: "show-details",
    props: true,
    component: () => import("../views/ShowDetails.vue"),
    meta: { title: "Show details" },
  },
  {
    path: "/show/:id/season/:seasonNumber",
    name: "episodes",
    props: true,
    component: () => import("../views/ShowEpisodes.vue"),
    meta: { title: "Episodes" },
  },
  {
    path: "/searchDetails/:searchText",
    name: "search-details",
    props: true,
    component: () => import("../views/SearchDetails.vue"),
    meta: { title: "Search details" },
  },
  {
    path: "/error",
    component: () => import("../views/ErrorView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/NotFound.vue"),
    meta: { title: "Not Found" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `TV Shows | ${to.meta.title}`;
  next();
});

export default router;
