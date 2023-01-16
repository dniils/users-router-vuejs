import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    // name: "home",
    component: HomeView,
  },
  {
    path: "/users/:userID",
    name: "user",
    component: () => import("@/views/UserView.vue"), //lazy-loading
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
