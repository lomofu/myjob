import Vue from "vue";
import Vuex from "vuex";
import user from "./user/user";
import menu from "./menu/menu";
import events from "./events/index";
import calendar from "./schedule/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { user, menu, events, calendar }
});
