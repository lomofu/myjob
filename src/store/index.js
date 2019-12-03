import Vue from "vue";
import Vuex from "vuex";
import user from "./user/user";
import menu from "./menu/menu";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { user, menu }
});
