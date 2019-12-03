import "babel-polyfill";
import "animate.css";
import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import VCharts from "v-charts";

Vue.config.productionTip = false;
Vue.use(VCharts);
Vue.use(Vuex);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

router.beforeEach((to, from, next) => {
  document.title = "Ben. " + " | " + to.meta.title;
  next();
});

export const eventBus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  Vuelidate,
  render: h => h(App)
}).$mount("#app");
