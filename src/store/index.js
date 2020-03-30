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

const mutations = {
  changeNumber(state, value) {
    state.appNumber = state.appNumber + value;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  getters
});

export default store;
