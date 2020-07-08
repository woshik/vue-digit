import { getUser } from "../../services/users";

const state = {
  user: {},
};

const getters = {
  username: (state) => state.user.name,
};

const actions = {
  fetchUserData: ({ state, commit }, payload) => {
    if (!Object.keys(state.user).length) {
      const userData = getUser(payload);
      commit("setUserData", userData);
    }
  },
};

const mutations = {
  setUserData: (state, payload) => (state.user = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
