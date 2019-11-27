import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import VCharts from "v-charts";
import "animate.css";

Vue.config.productionTip = false;
Vue.use(VCharts);
Vue.use(Vuex);

// router.beforeEach()

new Vue({
  router,
  store,
  vuetify,
  Vuelidate,
  render: h => h(App)
}).$mount("#app");
