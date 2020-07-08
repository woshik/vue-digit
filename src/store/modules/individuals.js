import { fakeData } from "../../services/individuals";

const state = {
  individualData: [],
};

const getters = {
  individualsData: ({ individualData }) => individualData,
  individualsCount: ({ individualData }) => individualData.length,
};

const actions = {
  fetchIndividualsData: ({ state, commit }) => !state.length && commit("setIndividualsData", fakeData()),
};

const mutations = {
  setIndividualsData: (state, payload) => (state.individualData = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
