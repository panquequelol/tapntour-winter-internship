import { createWebHistory, createRouter } from "vue-router";

import HomeLayout from "@/layouts/HomeLayout.vue";
import TourView from "@/menu/tour/TourView.vue";
import GuideView from "@/menu/guide/GuideView.vue";
import SignUpView from "@/menu/profile/SignUpView.vue";
import TourList from "@/menu/tour/TourList.vue";

import TourDetail from "@/menu/tour/TourDetail.vue";

const routes = [
  {
    path: "/",
    name: "HomeLayout",
    component: HomeLayout,
  },
  {
    path: "/tours",
    name: "TourView",
    component: TourList,
  },
  {
    path: "/tours/country/:country_name",
    name: "ToursByCountry",
    component: TourList,
  },
  {
    path: "/guides",
    name: "GuideView",
    component: GuideView,
  },
  {
    path: "/profile",
    name: "SignUpView",
    component: SignUpView,
  },
  {
    path: "/tours/:id",
    name: "TourDetail",
    component: TourDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
