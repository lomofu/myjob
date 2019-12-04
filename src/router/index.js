import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页"
    },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "支持"
    },
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/user",
    name: "user",
    meta: {
      title: "用户中心"
    },
    component: () => import("../views/UserCenter.vue"),
    children: [
      {
        meta: {
          title: "个人看板"
        },
        path: "/",
        component: () => import("../components/user/Dashboard.vue")
      },
      {
        meta: {
          title: "团队成员"
        },
        path: "employees/:tid",
        component: () => import("../components/user/Employees.vue")
      },
      {
        meta: {
          title: "项目工程"
        },
        path: "projects/:pid",
        component: () => import("../components/user/Project.vue")
      }
    ]
  },
  {
    path: "/signup",
    name: "signUp",
    meta: {
      title: "注册"
    },
    component: () => import("../views/SignUp.vue")
  },
  {
    path: "/price",
    name: "price",
    meta: {
      title: "价格"
    },
    component: () => import("../views/Price.vue")
  },
  {
    path: "/support",
    name: "support",
    meta: {
      title: "支持"
    },
    component: () => import("../views/Support.vue")
  },
  { path: "*", name: "404", component: () => import("../views/404.vue") }
];

const router = new VueRouter({
  // mode: 'history',
  routes
});

export default router;
