import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserCenter.vue")
  },
  {
    path: "/signup",
    name: "signUp",
    component: () => import("../views/SignUp.vue")
  },
  {
    path: "/price",
    name: "price",
    component: () => import("../views/Price.vue")
  },
  { path: "*", name: "404", component: () => import("../views/404.vue") }
];

const router = new VueRouter({
  // mode: 'history',
  routes
});

export default router;
