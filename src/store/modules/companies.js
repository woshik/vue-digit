import { fakeCompanies } from "../../services/companies";

const state = {
  companiesData: [],
};

const getters = {
  companiesData: ({ companiesData }) => companiesData,
  companiesCount: ({ companiesData }) => companiesData.length,
};

const actions = {
  fetchCompanyData: ({ state, commit }) => !state.length && commit("setCompaniesData", fakeCompanies()),
};

const mutations = {
  setCompaniesData: (state, payload) => (state.companiesData = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
