import Vue from "vue";
import Vuetify from "vuetify/lib";
import VueTypedJs from "vue-typed-js";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);
Vue.use(VueTypedJs);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  }
});
