import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  appNumber: 0
};

const mutations = {
  changeNumber(state, value) {
    state.appNumber = state.appNumber + value;
  }
};

const store = new Vuex.Store({
  state,
  mutations
});

export default store;
