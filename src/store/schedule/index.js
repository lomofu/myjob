const calendar = {
  state: {
    start: null,
    end: null
  },
  getters: {
    getStart: ({ start }) => {
      return start;
    },
    getEnd: ({ end }) => {
      return end;
    }
  },
  mutations: {
    updateStart(state, start) {
      state.start = start;
    },
    updateEnd(state, end) {
      state.end = end;
    }
  },
  actions: {
    ayncUpdateStart({ commit }, start) {
      commit("updateStart", start);
    },
    ayncUpdateEnd({ commit }, end) {
      commit("updateEnd", end);
    }
  }
};

export default calendar;
