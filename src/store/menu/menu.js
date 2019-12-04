import data from "./data";
import project from "./project";

const menu = {
  state: {
    menu: data,
    project: project
  },
  getters: {
    getMenu: state => {
      return state.menu;
    },
    getProject: state => {
      return state.project;
    }
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu;
    },
    setProject(state, project) {
      state.project = project;
    }
  },
  actions: {
    asyncSetMenu(context, menu) {
      context.commit("setMenu", menu);
    },
    asyncSetProject(context, menu) {
      context.commit("setProject", menu);
    }
  }
};

export default menu;
