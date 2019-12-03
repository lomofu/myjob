import data from "./data";

const menu = {
  state: {
    menu: data
  },
  getters: {
    getMenu: state => {
      return state.menu;
    }
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu;
    }
  },
  actions: {
    asyncSetMenu(context, menu) {
      context.commit("setMenu", menu);
    }
  }
};

export default menu;
