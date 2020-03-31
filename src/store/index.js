import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  appNumber: 0
};

const getters = {
  appNumber(state) {
    return state.appNumber;
  }
};
const actions = {
  changeNumber({ commit }, val) {
    commit("changeNumber", val);
  }
};
const mutations = {
  changeNumber(state, value) {
    state.appNumber = state.appNumber + value;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
