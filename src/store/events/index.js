import { data } from "./data";

const events = {
  state: {
    events: data
  },
  getters: {
    getEvents: state => {
      return state.events;
    }
  },
  mutations: {
    updateEvents(state, events) {
      state.events = events;
    }
  },
  actions: {
    asyncUpdateEvents(context, events) {
      context.$emit("updateEvents", events);
    }
  }
};

export default events;
