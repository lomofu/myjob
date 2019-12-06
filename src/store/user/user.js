const user = {
  // 因为模块化了，所以解决刷新问题的代码需要改造一下
  state: sessionStorage.getItem("userState")
    ? JSON.parse(sessionStorage.getItem("userState"))
    : {
        user: {
          name: "MyName",
          picture: "https://cdn.vuetifyjs.com/images/john.jpg",
          email: "xxx@email.com",
          isAdmin: true
        }
      },
  getters: {
    getUser(state) {
      return state.user;
    }
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    asyncUpdateUser(context, user) {
      context.commit("updateUser", user);
    }
  }
};

export default user;
