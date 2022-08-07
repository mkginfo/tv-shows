import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorView from "../views/ErrorView.vue";
import NotFound from "../views/NotFound.vue";
import DashboardView from "../views/DashboardView.vue";
import ShowDetails from "../views/ShowDetails.vue";
import ShowEpisodes from "../views/ShowEpisodes.vue";
import SearchDetails from "../views/SearchDetails.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Home" },
  },
  {
    path: "/show/:id",
    name: "showDetails",
    component: () => import("../views/ShowDetailsView.vue"),
    meta: { title: "Show Details" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { title: "Dashboard" },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: "About" },
  },
  {
    path: "/showDetails/:id",
    name: "show-details",
    props: true,
    component: ShowDetails,
    meta: { title: "Show details" },
  },
  {
    path: "/show/:id/season/:seasonNumber",
    name: "episodes",
    props: true,
    component: ShowEpisodes,
    meta: { title: "Episodes" },
  },
  {
    path: "/searchDetails/:searchText",
    name: "search-details",
    props: true,
    component: SearchDetails,
    meta: { title: "Search details" },
  },
  {
    path: "/error",
    component: ErrorView,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
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
