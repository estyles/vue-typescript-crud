import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import vmodal from 'vue-js-modal'

Vue.use(VueRouter);
Vue.use(vmodal)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("../components/TutorialsList.vue")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("../components/Tutorial.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddTutorial.vue")
  },
  {
    path: "/houses",
    name: "houses",
    component: () => import("../components/HousesList.vue")
  },
  {
    path: "/heatmap",
    name: "heatmap",
    component: () => import("../components/HeatMap.vue")
  },
  {
    path: "/houses/:id",
    name: "house-details",
    component: () => import("../components/House.vue")
  },
  {
    path: "/addhouse",
    name: "add-house",
    component: () => import("../components/AddHouse.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
