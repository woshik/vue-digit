import Vue from "vue";
import Vuex from "vuex";
import companies from "./modules/companies";
import individuals from "./modules/individuals";
import users from "./modules/users";
import pageDate from "./modules/pageData";

// install vuex plugin
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    companies,
    individuals,
    users,
    pageDate,
  },
});

export default store;
